import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string; 
    text: string;
    pos?: string;
    by?: string;
  };
}

// Define the props for the CircularGallery component
export interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius: customRadius, autoRotateSpeed = 0.06, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const animationFrameRef = useRef<number | null>(null);
    const dragStartX = useRef<number | null>(null);
    const lastRotation = useRef(0);

    // Responsive check
    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 640);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    const radius = customRadius ?? (isMobile ? 260 : 425);

    // Effect for auto-rotation when not interacting
    useEffect(() => {
      const autoRotate = () => {
        if (!isInteracting) {
          setRotation((prev) => (prev + autoRotateSpeed) % 360);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isInteracting, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    // Pointer drag handlers for interactive rotation
    const handlePointerDown = (e: React.PointerEvent) => {
      dragStartX.current = e.clientX;
      lastRotation.current = rotation;
      setIsInteracting(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) {}
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (dragStartX.current === null) return;
      const deltaX = e.clientX - dragStartX.current;
      // Dragging left turns forward, dragging right turns back
      setRotation(lastRotation.current - deltaX * (isMobile ? 0.35 : 0.25));
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch (_) {}
      dragStartX.current = null;
      setTimeout(() => setIsInteracting(false), 800);
    };

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y",
          className
        )}
        style={{ perspective: isMobile ? '1000px' : '1600px' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: isInteracting ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.2, 1 - Math.pow(normalizedAngle / 180, 1.4));
            const isFront = normalizedAngle < 40;

            const cardW = isMobile ? 210 : 300;
            const cardH = isMobile ? 295 : 410;

            return (
              <div
                key={item.common}
                role="group"
                aria-label={item.common}
                className="absolute transition-opacity duration-300"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: `-${cardW / 2}px`,
                  marginTop: `-${cardH / 2}px`,
                  opacity: opacity,
                  zIndex: isFront ? 30 : Math.round(20 - normalizedAngle / 10),
                }}
              >
                <div className={cn(
                  "relative w-full h-full rounded-[22px] overflow-hidden group border transition-all duration-500 bg-zinc-950",
                  isFront 
                    ? "border-purple-500/40 shadow-[0_24px_50px_-10px_rgba(147,51,234,0.28)] ring-1 ring-purple-400/30" 
                    : "border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/25"
                )}>
                  {/* Background Image with smooth zoom on hover */}
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />

                  {/* Multi-layered cinematic gradient overlays for pristine readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 via-50% to-black/25 opacity-95 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80" />

                  {/* Subtle top edge light reflection */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Top Bar: Sector index & minimal arrow */}
                  <div className="absolute top-3.5 inset-x-3.5 z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.62rem] sm:text-[0.68rem] font-mono font-medium bg-black/50 text-zinc-300 border border-white/10 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Sector 0{i + 1}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-purple-300 group-hover:border-purple-400/30 transition-all duration-300 group-hover:scale-105">
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 9L9 3M4 3h5v5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>

                  {/* Editorial Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10 flex flex-col justify-end">
                    <span className="text-[0.6rem] sm:text-[0.68rem] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                      Vertical Case
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-serif tracking-tight leading-snug drop-shadow-sm text-white group-hover:text-purple-100 transition-colors">
                      {item.common}
                    </h3>
                    <p className="text-xs sm:text-[0.8rem] font-sans text-zinc-300 font-normal mt-1 leading-relaxed line-clamp-2">
                      {item.binomial}
                    </p>

                    {/* Refined capability footer */}
                    {item.photo.by ? (
                      <div className="border-t border-white/10 pt-2.5 mt-2.5 flex items-center justify-between">
                        <span className="text-[0.62rem] sm:text-[0.68rem] font-mono text-zinc-400 tracking-wide">
                          {item.photo.by}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
