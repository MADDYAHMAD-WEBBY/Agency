"use client";

import dynamic from "next/dynamic";

const OfficialNovatrix = dynamic(
  () => import("uvcanvas").then((m) => m.Novatrix),
  { ssr: false }
);

interface NovatrixBackgroundProps {
  className?: string;
}

export function NovatrixBackground({ className = "" }: NovatrixBackgroundProps) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      <OfficialNovatrix />
    </div>
  );
}

export default NovatrixBackground;
