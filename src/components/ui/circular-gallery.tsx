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
  ({ items, className, radius: customRadius, autoRotateSpeed = 0.05, ...props }, ref) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const cylinderRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const currentRot = useRef(0);
    const targetRot = useRef(0);
    const velocity = useRef(0);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragStartY = useRef(0);
    const lastDragX = useRef(0);
    const lastDragTime = useRef(0);
    const isHorizontalDrag = useRef<boolean | null>(null);
    const autoRotateActive = useRef(true);
    const idleTimeout = useRef<number | null>(null);

    // Responsive check
    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 640);
      check();
      window.addEventListener('resize', check, { passive: true });
      return () => window.removeEventListener('resize', check);
    }, []);

    const radius = customRadius ?? (isMobile ? 250 : 425);
    const count = items.length;
    const anglePerItem = count > 0 ? 360 / count : 45;

    // Direct 60-120fps physics loop with ZERO React state updates per frame
    useEffect(() => {
      let frame = 0;
      let lastTime = performance.now();

      const loop = (now: number) => {
        frame = requestAnimationFrame(loop);
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        if (!isDragging.current) {
          if (Math.abs(velocity.current) > 0.04) {
            // Apply fluid momentum friction decay
            targetRot.current += velocity.current;
            velocity.current *= isMobile ? 0.93 : 0.94;
          } else {
            velocity.current = 0;
            // Resume gentle auto-rotation when idle
            if (autoRotateActive.current) {
              targetRot.current += autoRotateSpeed;
            }
          }
        }

        // High-precision smooth lerp easing toward target
        const diff = targetRot.current - currentRot.current;
        if (Math.abs(diff) < 0.003) {
          currentRot.current = targetRot.current;
        } else {
          currentRot.current += diff * (isMobile ? 0.16 : 0.12);
        }

        const rot = currentRot.current;

        // 1. Direct GPU transform on cylinder
        if (cylinderRef.current) {
          cylinderRef.current.style.transform = `rotateY(${rot.toFixed(2)}deg)`;
        }

        // 2. Direct DOM update on cards (opacity, zIndex, front highlight)
        const rotNorm = ((rot % 360) + 360) % 360;
        let bestDist = 999;
        let frontIdx = 0;

        for (let i = 0; i < count; i++) {
          const card = cardRefs.current[i];
          if (!card) continue;

          const itemAngle = i * anglePerItem;
          const relAngle = (itemAngle + rotNorm + 360) % 360;
          const normAngle = Math.abs(relAngle > 180 ? 360 - relAngle : relAngle);

          if (normAngle < bestDist) {
            bestDist = normAngle;
            frontIdx = i;
          }

          // Smooth curved falloff: front card is crisp, side cards recede gracefully
          const opacity = Math.max(0.18, 1 - Math.pow(normAngle / 180, 1.35));
          card.style.opacity = opacity.toFixed(3);
          card.style.zIndex = String(Math.round(50 - normAngle / 5));
          card.style.pointerEvents = normAngle < 50 ? 'auto' : 'none';

          const isFront = normAngle < 35;
          const inner = card.firstElementChild as HTMLElement | null;
          if (inner) {
            if (isFront) {
              inner.style.borderColor = 'rgba(168, 85, 247, 0.45)';
              inner.style.boxShadow = '0 24px 50px -10px rgba(147, 51, 234, 0.28)';
            } else {
              inner.style.borderColor = 'rgba(255, 255, 255, 0.10)';
              inner.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.50)';
            }
          }
        }

        setActiveIndex((prev) => (prev === frontIdx ? prev : frontIdx));
      };

      frame = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(frame);
    }, [count, anglePerItem, autoRotateSpeed, isMobile]);

    // Touch & pointer interaction with velocity tracking & non-blocking vertical scroll
    const handlePointerDown = (e: React.PointerEvent) => {
      isDragging.current = true;
      autoRotateActive.current = false;
      velocity.current = 0;
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;
      lastDragX.current = e.clientX;
      lastDragTime.current = performance.now();
      isHorizontalDrag.current = null;

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current) return;

      const now = performance.now();
      const dx = e.clientX - dragStartX.current;
      const dy = e.clientY - dragStartY.current;

      // Discriminate vertical page scroll vs horizontal carousel swipe on touch devices
      if (e.pointerType === 'touch' && isHorizontalDrag.current === null) {
        if (Math.abs(dy) > 7 || Math.abs(dx) > 7) {
          if (Math.abs(dy) > Math.abs(dx)) {
            // User is scrolling the page vertically: release immediately!
            isHorizontalDrag.current = false;
            isDragging.current = false;
            autoRotateActive.current = true;
            return;
          } else {
            // Horizontal swipe detected: lock to carousel
            isHorizontalDrag.current = true;
            try {
              e.currentTarget.setPointerCapture(e.pointerId);
            } catch (_) {}
          }
        } else {
          return;
        }
      } else if (e.pointerType !== 'touch') {
        try {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.setPointerCapture(e.pointerId);
          }
        } catch (_) {}
      }

      // Calculate instantaneous movement
      const stepX = e.clientX - lastDragX.current;
      const dt = Math.max(now - lastDragTime.current, 1);
      
      // Calculate velocity for natural momentum on release
      velocity.current = -(stepX / dt) * (isMobile ? 14 : 10);
      velocity.current = Math.max(-12, Math.min(12, velocity.current));

      // 1:1 responsive rotation sensitivity
      const dragSensitivity = isMobile ? 0.38 : 0.28;
      targetRot.current -= stepX * dragSensitivity;

      lastDragX.current = e.clientX;
      lastDragTime.current = now;
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch (_) {}

      isDragging.current = false;
      isHorizontalDrag.current = null;

      // If finger was stationary before lift, snap to nearest card
      if (Math.abs(velocity.current) < 0.3) {
        const nearestSlot = Math.round(targetRot.current / anglePerItem);
        targetRot.current = nearestSlot * anglePerItem;
        velocity.current = 0;
      }

      // Resume smooth auto-rotation after 2.5s of inactivity
      idleTimeout.current = window.setTimeout(() => {
        autoRotateActive.current = true;
      }, 2500);
    };

    // Helper to rotate to next / previous card on tap
    const stepTo = (dir: 1 | -1) => {
      autoRotateActive.current = false;
      velocity.current = 0;
      const currentSlot = Math.round(targetRot.current / anglePerItem);
      targetRot.current = (currentSlot + dir) * anglePerItem;

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = window.setTimeout(() => {
        autoRotateActive.current = true;
      }, 3000);
    };

    const cardW = isMobile ? 220 : 300;
    const cardH = isMobile ? 310 : 410;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y",
          className
        )}
        style={{ perspective: isMobile ? '1100px' : '1600px' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        <div
          ref={cylinderRef}
          className="relative w-full h-full will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            return (
              <div
                key={item.common}
                role="group"
                aria-label={item.common}
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                className="absolute will-change-transform transition-[border-color,box-shadow] duration-300"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: `-${cardW / 2}px`,
                  marginTop: `-${cardH / 2}px`,
                }}
              >
                <div
                  className="relative w-full h-full rounded-[10px] overflow-hidden group border border-white/10 transition-all duration-300 bg-zinc-950"
                  style={{
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Background Image with smooth zoom on hover */}
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />

                  {/* Reduced subtle bottom gradient for text contrast while keeping photo vivid & clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-40% to-transparent opacity-75 group-hover:opacity-65 transition-opacity" />

                  {/* Subtle top edge light reflection */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Editorial Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10 flex flex-col justify-end">
                    <span className="text-[0.6rem] sm:text-[0.68rem] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                      Vertical Case
                    </span>
                    <h3 className="text-base sm:text-xl font-bold font-serif tracking-tight leading-snug drop-shadow-sm text-white group-hover:text-purple-100 transition-colors">
                      {item.common}
                    </h3>
                    <p className="text-xs sm:text-[0.8rem] font-sans text-zinc-300 font-normal mt-1 leading-relaxed line-clamp-2">
                      {item.binomial}
                    </p>

                    {/* Refined capability footer */}
                    {item.photo.by ? (
                      <div className="border-t border-white/10 pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 flex items-center justify-between">
                        <span className="text-[0.6rem] sm:text-[0.68rem] font-mono text-zinc-400 tracking-wide line-clamp-1">
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

        {/* Mobile Smooth Quick-Tap Controls (Prev / Next & Counter) */}
        <div className="sm:hidden absolute -bottom-2 z-30 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-md border border-zinc-200/80">
          <button
            type="button"
            aria-label="Previous industry"
            onClick={() => stepTo(1)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:text-purple-600 active:bg-purple-100 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span className="text-[0.68rem] font-mono font-semibold text-zinc-700 px-1 select-none">
            {activeIndex + 1} / {count}
          </span>

          <button
            type="button"
            aria-label="Next industry"
            onClick={() => stepTo(-1)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:text-purple-600 active:bg-purple-100 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
