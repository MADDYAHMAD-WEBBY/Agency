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

    const radius = customRadius ?? (isMobile ? 320 : 540);

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
        style={{ perspective: isMobile ? '1200px' : '2200px' }}
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

            const cardW = isMobile ? 220 : 280;
            const cardH = isMobile ? 310 : 390;

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
                  "relative w-full h-full rounded-2xl shadow-xl overflow-hidden group border transition-all duration-300 bg-zinc-900",
                  isFront 
                    ? "border-purple-500/50 shadow-[0_20px_40px_rgba(147,51,234,0.22)] ring-1 ring-purple-500/30" 
                    : "border-white/10 hover:border-white/30"
                )}>
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 transition-opacity" />

                  {/* Badge top tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] sm:text-xs font-mono font-semibold bg-black/60 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      Industry
                    </span>
                  </div>

                  {/* Card Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10">
                    <h3 className="text-lg sm:text-xl font-bold font-serif tracking-tight leading-snug drop-shadow-sm text-white group-hover:text-purple-200 transition-colors">
                      {item.common}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-purple-300/90 font-medium mt-1 leading-snug">
                      {item.binomial}
                    </p>
                    {item.photo.by ? (
                      <span className="text-[0.65rem] sm:text-[0.7rem] text-zinc-400 block mt-2 opacity-80">
                        {item.photo.by}
                      </span>
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
