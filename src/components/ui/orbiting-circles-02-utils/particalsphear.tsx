"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      return { width: rect.width, height: rect.height };
    };

    let dims = setupCanvas() || { width: 500, height: 500 };

    const handleResize = () => {
      const newDims = setupCanvas();
      if (newDims) dims = newDims;
    };
    window.addEventListener("resize", handleResize);

    // Generate points on a 3D sphere using Fibonacci sphere layout
    const numPoints = 550;
    const radius = Math.min(dims.width, dims.height) * 0.42;
    const points: { x: number; y: number; z: number }[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({ x: x * radius, y: y * radius, z: z * radius });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, dims.width, dims.height);

      angleY += 0.004;
      angleX += 0.0015;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = dims.width / 2;
      const centerY = dims.height / 2;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // 3D to 2D projection
        const perspective = 450;
        const scale = perspective / (perspective + z2);
        const x2D = centerX + x1 * scale;
        const y2D = centerY + y1 * scale;

        // Size & opacity based on Z depth
        const alpha = Math.max(0.35, (z2 + radius) / (2 * radius));
        const dotSize = Math.max(2.0, 3.4 * scale);

        ctx.beginPath();
        ctx.arc(x2D, y2D, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${Math.min(1, alpha * 0.95)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
    />
  );
}
