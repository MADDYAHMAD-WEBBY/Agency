"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe as GlobeIcon, Sparkles } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Featured_05() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-2xl px-6 py-12 md:px-12 md:py-16 my-8 text-white">
      {/* Decorative Gradient Background Highlights */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Column: Heading & Text */}
        <div className="max-w-xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Global Engineering & Local SEO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build & Scale <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Worldwide</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Empower your brand with sub-second Core Web Vitals, custom Next.js applications, and white-hat Local SEO strategies engineered for maximum growth and revenue.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button 
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 text-sm sm:text-base font-bold transition shadow-lg cursor-pointer"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium">
              <GlobeIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Available for International Projects</span>
            </div>
          </div>
        </div>

        {/* Right Column: Globe Canvas Container */}
        <div className="relative w-full max-w-md lg:max-w-lg aspect-square min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
          <Globe className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

type CobeConfig = COBEOptions & { onRender?: (state: Record<string, any>) => void };

const GLOBE_CONFIG: CobeConfig = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.15, 0.18, 0.3],
  markerColor: [0.6, 0.3, 1.0],
  glowColor: [0.1, 0.15, 0.35],
  markers: [
    { location: [14.5995, 120.9842], size: 0.05 },
    { location: [19.076, 72.8777], size: 0.08 },
    { location: [23.8103, 90.4125], size: 0.06 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.09 },
    { location: [19.4326, -99.1332], size: 0.08 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.06 },
    { location: [41.0082, 28.9784], size: 0.07 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: CobeConfig;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    } as any);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[500px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
