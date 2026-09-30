// @ts-nocheck
"use client"

import React, { useRef, useEffect, useMemo } from "react";
import {
    Clock, PerspectiveCamera, Scene, WebGLRenderer, SRGBColorSpace, MathUtils,
    Vector2, Vector3, MeshPhysicalMaterial, Color, Object3D, InstancedMesh,
    PMREMGenerator, SphereGeometry, AmbientLight, PointLight, ACESFilmicToneMapping,
    Raycaster, Plane
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// --- Three.js Boilerplate Class (X) ---
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
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            powerPreference: "high-performance",
            alpha: true,
            antialias: true,
            ...this.#config.rendererOptions,
        });
        this.renderer.outputColorSpace = SRGBColorSpace;
        this.canvas.style.display = "block";
        this.#initObservers();
        this.resize();
    }
    #initObservers() {
        const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as Element) : null;
        if(parentEl) {
            this.#resizeObserver = new ResizeObserver(this.#onResize.bind(this));
            this.#resizeObserver.observe(parentEl);
        } else {
            window.addEventListener("resize", this.#onResize.bind(this));
        }
        this.#intersectionObserver = new IntersectionObserver(this.#onIntersection.bind(this), { threshold: 0 });
        this.#intersectionObserver.observe(this.canvas);
        document.addEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
    }
    #onResize() { if (this.#resizeTimer) clearTimeout(this.#resizeTimer); this.#resizeTimer = window.setTimeout(this.resize.bind(this), 100); }
    resize() {
        const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as HTMLElement) : null;
        const w = parentEl ? parentEl.offsetWidth : window.innerWidth;
        const h = parentEl ? parentEl.offsetHeight : window.innerHeight;
        this.size.width = w; this.size.height = h; this.size.ratio = w / h;
        this.camera.aspect = this.size.ratio; this.camera.updateProjectionMatrix();
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        this.renderer.setSize(w, h); this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
        this.onAfterResize(this.size);
    }
    #onIntersection(e: any) { this.#isAnimating = e[0].isIntersecting; this.#isAnimating ? this.#startAnimation() : this.#stopAnimation(); }
    #onVisibilityChange() { if (this.#isAnimating) document.hidden ? this.#stopAnimation() : this.#startAnimation(); }
    #startAnimation() { if (this.#isVisible) return; this.#isVisible = true; this.#clock.start(); const f = () => { this.#animationFrameId = requestAnimationFrame(f); this.#animationState.delta = this.#clock.getDelta(); this.#animationState.elapsed += this.#animationState.delta; this.onBeforeRender(this.#animationState); this.renderer.render(this.scene, this.camera); }; f(); }
    #stopAnimation() { if (this.#isVisible) { cancelAnimationFrame(this.#animationFrameId); this.#isVisible = false; this.#clock.stop(); } }
    dispose() { this.#stopAnimation(); this.#resizeObserver?.disconnect(); this.#intersectionObserver?.disconnect(); window.removeEventListener("resize", this.#onResize.bind(this)); document.removeEventListener("visibilitychange", this.#onVisibilityChange.bind(this)); this.scene.clear(); this.renderer.dispose(); }
}

// --- Physics Engine Class (W) ---
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
        this.#initializePositions(); this.setSizes();
    }
    #initializePositions() { const { count, maxX, maxY, maxZ } = this.config; this.center.toArray(this.positionData, 0); for (let i = 1; i < count; i++) { const idx = 3 * i; this.positionData[idx] = MathUtils.randFloatSpread(2 * maxX); this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * maxY); this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * maxZ); } }
    setSizes() { const { count, size0, minSize, maxSize } = this.config; this.sizeData[0] = size0; for (let i = 1; i < count; i++) this.sizeData[i] = MathUtils.randFloat(minSize, maxSize); }
    
    triggerClickBurst(point: Vector3) {
        this.shockwaveCenter.copy(point);
        this.shockwaveForce = 1.2;
    }

    update(deltaInfo: { delta: number; elapsed: number }) {
        const { config, center, positionData, sizeData, velocityData } = this;
        const startIdx = config.controlSphere0 ? 1 : 0;
        
        if (config.controlSphere0) {
            new Vector3().fromArray(positionData, 0).lerp(center, 0.12).toArray(positionData, 0);
            new Vector3(0, 0, 0).toArray(velocityData, 0);
        }

        // Decay click shockwave force over time
        if (this.shockwaveForce > 0.01) {
            this.shockwaveForce *= 0.88;
        } else {
            this.shockwaveForce = 0;
        }

        for (let i = startIdx; i < config.count; i++) {
            const base = 3 * i;
            const pos = new Vector3().fromArray(positionData, base);
            const vel = new Vector3().fromArray(velocityData, base);

            // Gentle Idle Wave Floating (Buoyancy)
            const floatOffset = Math.sin(deltaInfo.elapsed * 1.5 + i * 0.7) * 0.003;
            vel.y += floatOffset;

            // Apply Click Shockwave Burst Repulsion
            if (this.shockwaveForce > 0) {
                const distToShock = pos.distanceTo(this.shockwaveCenter);
                if (distToShock < 12) {
                    const pushDir = new Vector3().subVectors(pos, this.shockwaveCenter).normalize();
                    const impulse = (1 - distToShock / 12) * this.shockwaveForce * 0.3;
                    vel.addScaledVector(pushDir, impulse);
                }
            }

            vel.y -= deltaInfo.delta * config.gravity * sizeData[i];
            vel.multiplyScalar(config.friction);
            vel.clampLength(0, config.maxVelocity * 1.5);
            pos.add(vel);

            // Sphere-to-sphere collision resolution
            for (let j = i + 1; j < config.count; j++) {
                const otherBase = 3 * j;
                const otherPos = new Vector3().fromArray(positionData, otherBase);
                const diff = new Vector3().subVectors(otherPos, pos);
                const dist = diff.length();
                const sumRadius = sizeData[i] + sizeData[j];
                if (dist < sumRadius && dist > 0.001) {
                    const overlap = (sumRadius - dist) * 0.5;
                    diff.normalize();
                    pos.addScaledVector(diff, -overlap);
                    otherPos.addScaledVector(diff, overlap);
                    pos.toArray(positionData, base);
                    otherPos.toArray(positionData, otherBase);
                }
            }

            // Wall bounces inside 3D bounds
            if (Math.abs(pos.x) + sizeData[i] > config.maxX) { pos.x = Math.sign(pos.x) * (config.maxX - sizeData[i]); vel.x *= -config.wallBounce; }
            if (pos.y - sizeData[i] < -config.maxY) { pos.y = -config.maxY + sizeData[i]; vel.y *= -config.wallBounce; }
            if (Math.abs(pos.z) + sizeData[i] > config.maxZ) { pos.z = Math.sign(pos.z) * (config.maxZ - sizeData[i]); vel.z *= -config.wallBounce; }

            pos.toArray(positionData, base); vel.toArray(velocityData, base);
        }
    }
}

// --- Instanced Spheres Class (Z) --- Glassy Light Lavender Bubbles
const U = new Object3D();
class Z extends InstancedMesh {
    config: any;
    physics: W;
    ambientLight: AmbientLight;
    light: PointLight;
    constructor(renderer: WebGLRenderer, params: any) {
        const pmrem = new PMREMGenerator(renderer); const envTexture = pmrem.fromScene(new RoomEnvironment(renderer)).texture; pmrem.dispose();
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const geometry = new SphereGeometry(1, isMobile ? 16 : 24, isMobile ? 16 : 24);
        
        // Glassy Light Lavender Material
        const material = new MeshPhysicalMaterial({
            envMap: envTexture,
            transparent: true,
            opacity: 0.85,
            transmission: 0.88,
            ior: 1.48,
            roughness: 0.08,
            metalness: 0.08,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            reflectivity: 0.95,
            thickness: 0.6,
            ...params.materialParams,
        });
        super(geometry, material, params.count);
        this.config = params; this.physics = new W(this.config);
        this.ambientLight = new AmbientLight(0xffffff, params.ambientIntensity); this.add(this.ambientLight);
        this.light = new PointLight(0xd8b4fe, params.lightIntensity, 100, 1); this.add(this.light);
        this.setColors(this.config.colors);
    }
    setColors(colors: (string | Color)[]) {
        if (!Array.isArray(colors) || !colors.length) return;
        const colorObjs = colors.map(c => c instanceof Color ? c : new Color(c));
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
        if (this.config.controlSphere0) this.light.position.fromArray(this.physics.positionData, 0);
    }
}

// --- Pointer Logic ---
const pointer = new Vector2();
function onPointerMove(e: PointerEvent) {
    pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
}

// --- Default Glassy Light Lavender Bubble Palette ---
const lavenderColors = ["#E9D5FF", "#F3E8FF", "#D8B4FE", "#C084FC", "#DDD6FE", "#E0E7FF"];

const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;

const defaultBallpitConfig = {
    count: isMobileDevice ? 16 : 60,
    materialParams: {
        transparent: true,
        opacity: 0.85,
        transmission: 0.88,
        roughness: 0.08,
        clearcoat: 1.0,
    },
    minSize: 0.35, maxSize: 0.95, size0: 1.2,
    gravity: 0.25, friction: 0.995, wallBounce: 0.4, maxVelocity: 0.15,
    maxX: 10, maxY: 10, maxZ: 10,
    controlSphere0: true, followCursor: !isMobileDevice,
    lightIntensity: 5, ambientIntensity: 2,
};

interface GlassyLavenderBubblesProps {
    className?: string;
    ballpitConfig?: Partial<typeof defaultBallpitConfig>;
}

// --- Glassy Light Lavender Physics Bubbles Component ---
export default function GlassyLavenderBubbles({
    className = "",
    ballpitConfig = {},
}: GlassyLavenderBubblesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const config = useMemo(() => ({
        ...defaultBallpitConfig,
        ...ballpitConfig,
        colors: lavenderColors,
    }), [ballpitConfig]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const three = new X({ canvas, size: "parent" });
        three.renderer.toneMapping = ACESFilmicToneMapping;
        three.camera.position.set(0, 0, 20);

        const spheres = new Z(three.renderer, config);
        three.scene.add(spheres);

        const raycaster = new Raycaster();
        const plane = new Plane(new Vector3(0, 0, 1), 0);
        const intersectionPoint = new Vector3();

        if (config.followCursor) {
            window.addEventListener("pointermove", onPointerMove);
        }

        const handleClick = (e: MouseEvent) => {
            pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
            raycaster.setFromCamera(pointer, three.camera);
            if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
                spheres.physics.triggerClickBurst(intersectionPoint);
            }
        };

        window.addEventListener("click", handleClick);

        three.onBeforeRender = (deltaInfo) => {
            if (config.followCursor) {
                raycaster.setFromCamera(pointer, three.camera);
                if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
                    spheres.physics.center.copy(intersectionPoint);
                }
            }
            spheres.update(deltaInfo);
        };
        
        three.onAfterResize = (size) => {
            spheres.physics.config.maxX = size.wWidth / 2;
            spheres.physics.config.maxY = size.wHeight / 2;
            spheres.physics.config.maxZ = size.wWidth / 4;
        };

        return () => {
            if (config.followCursor) {
                window.removeEventListener("pointermove", onPointerMove);
            }
            window.removeEventListener("click", handleClick);
            three.dispose();
        };
    }, [config]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full bg-transparent ${className}`}
        />
    );
}
