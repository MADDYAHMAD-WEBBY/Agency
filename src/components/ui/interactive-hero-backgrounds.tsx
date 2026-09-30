// @ts-nocheck
"use client";

import React, { useRef, useEffect, useMemo } from "react";
import {
    Clock, PerspectiveCamera, Scene, WebGLRenderer, SRGBColorSpace, MathUtils,
    Vector2, Vector3, MeshPhysicalMaterial, MeshStandardMaterial, Color, Object3D, InstancedMesh,
    PMREMGenerator, SphereGeometry, AmbientLight, PointLight, ACESFilmicToneMapping,
    Raycaster, Plane
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// --- Static Reusable Vectors (Zero Garbage Collection overhead) ---
const vPos = new Vector3();
const vVel = new Vector3();
const vOtherPos = new Vector3();
const vDiff = new Vector3();
const vPushDir = new Vector3();

// --- Three.js Engine Wrapper ---
class X {
    #config: any;
    #resizeObserver?: ResizeObserver;
    #intersectionObserver?: IntersectionObserver;
    #resizeTimer?: number;
    #animationFrameId: number = 0;
    #clock: Clock = new Clock();
    #animationState = { elapsed: 0, delta: 0 };
    #isAnimating: boolean = false;
    #isVisible: boolean = false;
    canvas: HTMLCanvasElement;
    camera: PerspectiveCamera;
    scene: Scene;
    renderer: WebGLRenderer;
    size: any = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
    onBeforeRender: (state: { elapsed: number; delta: number }) => void = () => {};
    onAfterResize: (size: any) => void = () => {};

    constructor(config: any) {
        this.#config = config;
        this.canvas = this.#config.canvas;
        this.camera = new PerspectiveCamera(50, 1, 0.1, 100);
        this.camera.position.set(0, 0, 20);
        this.scene = new Scene();

        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            powerPreference: "high-performance",
            alpha: true,
            antialias: !isMobile,
            ...this.#config.rendererOptions,
        });
        this.renderer.outputColorSpace = SRGBColorSpace;
        this.canvas.style.display = "block";
        this.#initObservers();
        this.resize();
    }

    #initObservers() {
        const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as Element) : null;
        if (parentEl) {
            this.#resizeObserver = new ResizeObserver(this.#onResize.bind(this));
            this.#resizeObserver.observe(parentEl);
        } else {
            window.addEventListener("resize", this.#onResize.bind(this));
        }
        this.#intersectionObserver = new IntersectionObserver(this.#onIntersection.bind(this), { threshold: 0 });
        this.#intersectionObserver.observe(this.canvas);
        document.addEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
    }

    #onResize() {
        if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
        this.#resizeTimer = window.setTimeout(this.resize.bind(this), 100);
    }

    resize() {
        const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as HTMLElement) : null;
        const w = parentEl ? parentEl.offsetWidth : window.innerWidth;
        const h = parentEl ? parentEl.offsetHeight : window.innerHeight;
        this.size.width = w;
        this.size.height = h;
        this.size.ratio = w / h;
        this.camera.aspect = this.size.ratio;
        this.camera.updateProjectionMatrix();

        // Calculate accurate 3D frustum width & height at Z=0 plane
        const vFOV = (this.camera.fov * Math.PI) / 180;
        const visibleHeight = 2 * Math.tan(vFOV / 2) * this.camera.position.z;
        const visibleWidth = visibleHeight * this.camera.aspect;
        this.size.wWidth = visibleWidth;
        this.size.wHeight = visibleHeight;

        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        this.renderer.setSize(w, h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
        this.onAfterResize(this.size);
    }

    #onIntersection(e: any) {
        this.#isAnimating = e[0].isIntersecting;
        this.#isAnimating ? this.#startAnimation() : this.#stopAnimation();
    }

    #onVisibilityChange() {
        if (this.#isAnimating) document.hidden ? this.#stopAnimation() : this.#startAnimation();
    }

    #startAnimation() {
        if (this.#isVisible) return;
        this.#isVisible = true;
        this.#clock.start();
        const f = () => {
            this.#animationFrameId = requestAnimationFrame(f);
            this.#animationState.delta = Math.min(this.#clock.getDelta(), 0.05);
            this.#animationState.elapsed += this.#animationState.delta;
            this.onBeforeRender(this.#animationState);
            this.renderer.render(this.scene, this.camera);
        };
        f();
    }

    #stopAnimation() {
        if (this.#isVisible) {
            cancelAnimationFrame(this.#animationFrameId);
            this.#isVisible = false;
            this.#clock.stop();
        }
    }

    dispose() {
        this.#stopAnimation();
        this.#resizeObserver?.disconnect();
        this.#intersectionObserver?.disconnect();
        window.removeEventListener("resize", this.#onResize.bind(this));
        document.removeEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
        this.scene.clear();
        this.renderer.dispose();
    }
}

// --- Physics Engine (Side Floating + Text Exclusion Zone + No Memory Allocation) ---
class W {
    config: any;
    positionData: Float32Array;
    velocityData: Float32Array;
    sizeData: Float32Array;
    center: Vector3 = new Vector3();
    shockwaveCenter: Vector3 = new Vector3();
    shockwaveForce: number = 0;

    constructor(config: any) {
        this.config = config;
        this.positionData = new Float32Array(3 * config.count);
        this.velocityData = new Float32Array(3 * config.count);
        this.sizeData = new Float32Array(config.count);
        this.#initializePositions();
        this.setSizes();
    }

    #initializePositions() {
        const { count, maxX, maxY, maxZ } = this.config;
        for (let i = 0; i < count; i++) {
            const idx = 3 * i;
            // Distribute bubbles to left and right wings so center text stays clear
            const side = i % 2 === 0 ? 1 : -1;
            const xPos = side * MathUtils.randFloat(3.5, Math.max(4, maxX * 0.9));
            const yPos = MathUtils.randFloatSpread(maxY * 1.2);
            const zPos = MathUtils.randFloatSpread(maxZ * 0.6);

            this.positionData[idx] = xPos;
            this.positionData[idx + 1] = yPos;
            this.positionData[idx + 2] = zPos;

            this.velocityData[idx] = MathUtils.randFloat(-0.01, 0.01);
            this.velocityData[idx + 1] = MathUtils.randFloat(-0.01, 0.01);
            this.velocityData[idx + 2] = MathUtils.randFloat(-0.005, 0.005);
        }
    }

    setSizes() {
        const { count, minSize, maxSize } = this.config;
        for (let i = 0; i < count; i++) {
            this.sizeData[i] = MathUtils.randFloat(minSize, maxSize);
        }
    }

    triggerClickBurst(point: Vector3) {
        this.shockwaveCenter.copy(point);
        this.shockwaveForce = 1.0;
    }

    update(deltaInfo: { delta: number; elapsed: number }) {
        const { config, positionData, sizeData, velocityData } = this;

        if (this.shockwaveForce > 0.01) {
            this.shockwaveForce *= 0.88;
        } else {
            this.shockwaveForce = 0;
        }

        for (let i = 0; i < config.count; i++) {
            const base = 3 * i;
            vPos.fromArray(positionData, base);
            vVel.fromArray(velocityData, base);

            // Ambient Organic Floating (Waves)
            const floatX = Math.sin(deltaInfo.elapsed * 0.7 + i * 1.3) * 0.001;
            const floatY = Math.cos(deltaInfo.elapsed * 0.8 + i * 0.9) * 0.0012;
            vVel.x += floatX;
            vVel.y += floatY;

            // Soft Center Exclusion Zone (Pushes bubbles away from central headline)
            const distFromCenterSq = vPos.x * vPos.x + vPos.y * vPos.y * 1.6;
            if (distFromCenterSq < 22) {
                const pushFactor = (22 - distFromCenterSq) * 0.0007;
                const dirX = vPos.x >= 0 ? 1 : -1;
                vVel.x += dirX * pushFactor;
                vVel.y += (vPos.y >= 0 ? 1 : -1) * pushFactor * 0.4;
            }

            // Click shockwave expansion
            if (this.shockwaveForce > 0) {
                const distToShock = vPos.distanceTo(this.shockwaveCenter);
                if (distToShock < 10) {
                    vPushDir.subVectors(vPos, this.shockwaveCenter).normalize();
                    const impulse = (1 - distToShock / 10) * this.shockwaveForce * 0.2;
                    vVel.addScaledVector(vPushDir, impulse);
                }
            }

            vVel.multiplyScalar(config.friction);
            vVel.clampLength(0, config.maxVelocity);
            vPos.add(vVel);

            // Soft sphere-to-sphere collision resolution
            for (let j = i + 1; j < config.count; j++) {
                const otherBase = 3 * j;
                vOtherPos.fromArray(positionData, otherBase);
                vDiff.subVectors(vOtherPos, vPos);
                const dist = vDiff.length();
                const sumRadius = sizeData[i] + sizeData[j];
                if (dist < sumRadius && dist > 0.001) {
                    const overlap = (sumRadius - dist) * 0.4;
                    vDiff.normalize();
                    vPos.addScaledVector(vDiff, -overlap);
                    vOtherPos.addScaledVector(vDiff, overlap);
                    vPos.toArray(positionData, base);
                    vOtherPos.toArray(positionData, otherBase);
                }
            }

            // Soft boundary wall bounces
            const boundX = Math.max(4, config.maxX);
            const boundY = Math.max(3, config.maxY);
            const boundZ = Math.max(2, config.maxZ);

            if (Math.abs(vPos.x) + sizeData[i] > boundX) {
                vPos.x = Math.sign(vPos.x) * (boundX - sizeData[i]);
                vVel.x *= -config.wallBounce;
            }
            if (Math.abs(vPos.y) + sizeData[i] > boundY) {
                vPos.y = Math.sign(vPos.y) * (boundY - sizeData[i]);
                vVel.y *= -config.wallBounce;
            }
            if (Math.abs(vPos.z) + sizeData[i] > boundZ) {
                vPos.z = Math.sign(vPos.z) * (boundZ - sizeData[i]);
                vVel.z *= -config.wallBounce;
            }

            vPos.toArray(positionData, base);
            vVel.toArray(velocityData, base);
        }
    }
}

// --- Instanced Mesh & Shader Material ---
const U = new Object3D();
class Z extends InstancedMesh {
    config: any;
    physics: W;
    ambientLight: AmbientLight;
    light: PointLight;

    constructor(renderer: WebGLRenderer, params: any) {
        const pmrem = new PMREMGenerator(renderer);
        const envTexture = pmrem.fromScene(new RoomEnvironment(renderer)).texture;
        pmrem.dispose();

        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const geometry = new SphereGeometry(1, isMobile ? 12 : 20, isMobile ? 12 : 20);

        const material = isMobile
            ? new MeshStandardMaterial({
                  color: 0xffffff,
                  transparent: true,
                  opacity: 0.6,
                  roughness: 0.15,
                  metalness: 0.1,
              })
            : new MeshPhysicalMaterial({
                  envMap: envTexture,
                  transparent: true,
                  opacity: 0.75,
                  transmission: 0.75,
                  ior: 1.35,
                  roughness: 0.1,
                  metalness: 0.05,
                  clearcoat: 0.8,
                  clearcoatRoughness: 0.1,
                  reflectivity: 0.8,
                  thickness: 0.4,
                  ...params.materialParams,
              });

        super(geometry, material, params.count);
        this.config = params;
        this.physics = new W(this.config);

        this.ambientLight = new AmbientLight(0xffffff, params.ambientIntensity);
        this.add(this.ambientLight);

        this.light = new PointLight(0xd8b4fe, params.lightIntensity, 100, 1);
        this.add(this.light);

        this.setColors(this.config.colors);
    }

    setColors(colors: (string | Color)[]) {
        if (!Array.isArray(colors) || !colors.length) return;
        const colorObjs = colors.map((c) => (c instanceof Color ? c : new Color(c)));
        for (let i = 0; i < this.count; i++) this.setColorAt(i, colorObjs[i % colorObjs.length]);
        if (this.instanceColor) this.instanceColor.needsUpdate = true;
    }

    update(deltaInfo: { delta: number; elapsed: number }) {
        this.physics.update(deltaInfo);
        for (let i = 0; i < this.count; i++) {
            U.position.fromArray(this.physics.positionData, 3 * i);
            U.scale.setScalar(this.physics.sizeData[i]);
            U.updateMatrix();
            this.setMatrixAt(i, U.matrix);
        }
        this.instanceMatrix.needsUpdate = true;
    }
}

// --- Mouse Pointer ---
const pointer = new Vector2();

const lavenderColors = ["#E9D5FF", "#F3E8FF", "#D8B4FE", "#C084FC", "#DDD6FE", "#E0E7FF"];

const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;

const defaultBallpitConfig = {
    count: isMobileDevice ? 8 : 20,
    minSize: isMobileDevice ? 0.35 : 0.45,
    maxSize: isMobileDevice ? 0.75 : 1.1,
    friction: 0.98,
    wallBounce: 0.3,
    maxVelocity: 0.05,
    maxX: 12,
    maxY: 8,
    maxZ: 6,
    controlSphere0: false,
    followCursor: false,
    lightIntensity: 4,
    ambientIntensity: 2.5,
};

interface GlassyLavenderBubblesProps {
    className?: string;
    ballpitConfig?: Partial<typeof defaultBallpitConfig>;
}

export default function GlassyLavenderBubbles({
    className = "",
    ballpitConfig = {},
}: GlassyLavenderBubblesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const config = useMemo(
        () => ({
            ...defaultBallpitConfig,
            ...ballpitConfig,
            colors: lavenderColors,
        }),
        [ballpitConfig]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const three = new X({ canvas, size: "parent" });
        three.renderer.toneMapping = ACESFilmicToneMapping;

        const spheres = new Z(three.renderer, config);
        three.scene.add(spheres);

        const raycaster = new Raycaster();
        const plane = new Plane(new Vector3(0, 0, 1), 0);
        const intersectionPoint = new Vector3();

        const handleClick = (e: MouseEvent) => {
            pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
            raycaster.setFromCamera(pointer, three.camera);
            if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
                spheres.physics.triggerClickBurst(intersectionPoint);
            }
        };

        window.addEventListener("click", handleClick);

        three.onBeforeRender = (deltaInfo) => {
            spheres.update(deltaInfo);
        };

        three.onAfterResize = (size) => {
            if (size.wWidth && size.wHeight) {
                spheres.physics.config.maxX = size.wWidth / 2 - 0.5;
                spheres.physics.config.maxY = size.wHeight / 2 - 0.5;
                spheres.physics.config.maxZ = 4;
            }
        };

        return () => {
            window.removeEventListener("click", handleClick);
            three.dispose();
        };
    }, [config]);

    return <canvas ref={canvasRef} className={`w-full h-full bg-transparent ${className}`} />;
}
