"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback(() => {
    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p) => {
        try {
          p.pJS.fn.vendors.destroypJS();
        } catch {}
      });
      // @ts-ignore
      window.pJSDom = [];
    }

    // Rich Lavender Purple Color Palette
    const colors = {
      particles: "#9333ea", // Vibrant Purple
      lines: "#a855f7",     // Soft Purple Lines
      accent: "#7e22ce",    // Dark Purple Accent
    };

    // @ts-ignore
    if (typeof window.particlesJS === "function") {
      // @ts-ignore
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 140, density: { enable: true, value_area: 800 } },
          color: { value: colors.particles },
          shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
          opacity: {
            value: 0.75,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.35 },
          },
          size: {
            value: 3.5,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1 },
          },
          line_linked: {
            enable: true,
            distance: 175,
            color: colors.lines,
            opacity: 0.55,
            width: 1.3,
          },
          move: {
            enable: true,
            speed: 2,
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 250, line_linked: { opacity: 0.95 } },
            push: { particles_nb: 4 },
            repulse: { distance: 180, duration: 0.4 },
          },
        },
        retina_detect: true,
      });

      // Override canvas draw to render a glowing dot right at the line junction
      // @ts-ignore
      const pJS = window.pJSDom?.[0]?.pJS;
      if (pJS && pJS.fn && pJS.fn.particlesDraw) {
        const originalParticlesDraw = pJS.fn.particlesDraw;
        pJS.fn.particlesDraw = function () {
          originalParticlesDraw.apply(this, arguments);

          if (
            pJS.interactivity.status === "mousemove" &&
            pJS.interactivity.mouse.pos_x != null &&
            pJS.interactivity.mouse.pos_y != null
          ) {
            const ctx = pJS.canvas.ctx;
            const x = pJS.interactivity.mouse.pos_x;
            const y = pJS.interactivity.mouse.pos_y;

            ctx.save();

            // Outer purple glow aura
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(147, 51, 234, 0.25)";
            ctx.fill();

            // Inner vibrant ring
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(168, 85, 247, 0.6)";
            ctx.fill();

            // Solid glowing core particle dot where all lines join
            ctx.beginPath();
            ctx.arc(x, y, 4.5, 0, Math.PI * 2, false);
            ctx.fillStyle = "#9333ea";
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();

            ctx.restore();
          }
        };
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let script = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]'
    ) as HTMLScriptElement;

    const onScriptLoad = () => {
      initParticles();
    };

    if (!script) {
      script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = onScriptLoad;
    } else {
      if ((window as any).particlesJS) {
        onScriptLoad();
      } else {
        script.addEventListener("load", onScriptLoad);
      }
    }

    // Global window mousemove listener for 100% reliable particle grab line junction tracking
    const handleMouseMove = (e: MouseEvent) => {
      // @ts-ignore
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        // @ts-ignore
        const pJS = window.pJSDom[0].pJS;
        const canvas = document.querySelector(
          "#particles-js canvas"
        ) as HTMLCanvasElement;

        if (pJS.interactivity && canvas) {
          const rect = canvas.getBoundingClientRect();
          const pxratio = pJS.canvas.pxratio || 1;
          pJS.interactivity.mouse.pos_x = (e.clientX - rect.left) * pxratio;
          pJS.interactivity.mouse.pos_y = (e.clientY - rect.top) * pxratio;
          pJS.interactivity.status = "mousemove";
        }
      }
    };

    const handleMouseLeave = () => {
      // @ts-ignore
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        // @ts-ignore
        const pJS = window.pJSDom[0].pJS;
        if (pJS.interactivity) {
          pJS.interactivity.status = null;
          pJS.interactivity.mouse.pos_x = null;
          pJS.interactivity.mouse.pos_y = null;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className={`
        w-full h-full absolute inset-0
        pointer-events-auto z-0
        bg-gradient-to-tr from-[#faf5ff] via-[#f3e8ff] via-[#e9d5ff] to-[#ddd6fe]
      `}
    />
  );
}

