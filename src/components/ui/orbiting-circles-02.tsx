"use client";

import React from "react";
import { GlobeAnalytics } from "@/components/ui/globe-analytics";

const orbits = [
  {
    size: "w-[520px] h-[520px] sm:w-[620px] sm:h-[620px] md:w-[720px] md:h-[720px]",
    duration: 18,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/27/279f60ffd95d6d6e982c0d9544f465b21ba7895d2a7ba9dc2ea798f0aad31074.svg", alt: "Supabase", angle: -60 },
      { src: "https://cdn.21st.dev/assets/mirror/fd/fd242636f2a6c8ce90ddf51d45234a7add1a7262d0d517ef551a290d99fdb620.svg", alt: "gemini", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/d2/d27b280b7858bb5b89008eb325b9d4bdbd93ee1df92f8210247da4abc8a9c1ce.svg", alt: "Make", angle: 60 },
    ],
  },
  {
    size: "w-[640px] h-[640px] sm:w-[760px] sm:h-[760px] md:w-[880px] md:h-[880px]",
    duration: 24,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/cd/cdf9d8e18269a990e7854c0255d64513e5f8b6052b8580dd8f24480a85ec130a.svg", alt: "Figma design tool logo", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/83/83a5f27a428146febbe4672046c78bfa796a7931aebab5705655cab4fffb5794.svg", alt: "Slack communication platform logo", angle: -90 },
    ],
  },
  {
    size: "w-[760px] h-[760px] sm:w-[900px] sm:h-[900px] md:w-[1040px] md:h-[1040px]",
    duration: 30,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/b5/b58af96de173670c64254e6d93ca4e4daf57b2637cc4fb90529f3232ea1bdf3f.svg", alt: "Claude AI assistant logo", angle: -60 },
      { src: "https://cdn.21st.dev/assets/mirror/a2/a21f0f00193ad70e39d2d82b6437464853f77bf6569adeb1ecc6d1f7bc0f5226.svg", alt: "React JavaScript library logo", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/96/96c6123c466766d6714874ae77ba88be923c98313f09bbd72c9860ff26797d53.svg", alt: "Python programming language logo", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-end pointer-events-none opacity-85 z-0">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center 3D Cobe Globe Analytics */}
      <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-[480px] h-[480px] sm:w-[580px] sm:h-[580px] md:w-[680px] md:h-[680px] z-10 flex items-center justify-center">
        <GlobeAnalytics className="w-full h-full" />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute -bottom-[20px] left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-slate-300/50 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-4 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-1.5 sm:p-2 border border-slate-200 rounded-full bg-white shadow-sm -mt-5 relative z-10"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
