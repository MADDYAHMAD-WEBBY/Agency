"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Zap, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const INITIAL_CHIPS = [
  {
    id: 1,
    title: "Zero Hand-Holding",
    description: "I own the problem end to end",
    icon: Rocket,
  },
  {
    id: 2,
    title: "Production Ready",
    description: "Fully type-safe and tested",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Fluid Motion",
    description: "60fps optimizations built-in",
    icon: Zap,
  },
  {
    id: 4,
    title: "Modern Design",
    description: "Crafted for high-end feel",
    icon: Sparkles,
  },
];

const Bucket = () => {
  const [items, setItems] = useState(INITIAL_CHIPS);

  const isMobile = useIsMobile();

  const blurFilterStyle = isMobile
    ? {}
    : {
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      };

  const blurFilterStyleHeavy = isMobile
    ? {}
    : {
        backdropFilter: "blur(60.03px)",
        WebkitBackdropFilter: "blur(60.03px)",
      };

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-fit relative w-full">
      <div
        className="relative isolate w-full max-w-[655px]"
        style={{ aspectRatio: "655/352" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
        >
          <foreignObject
            x="443.561"
            y="-10.5141"
            width="211.24"
            height="166.977"
          >
            <div
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                clipPath: "url(#bgblur_0_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter1_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
              fill="url(#glassFlapLinear)"
              fillOpacity="0.6"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="-3.43323e-05"
            y="-10.9516"
            width="215.96"
            height="167.786"
          >
            <div
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                clipPath: "url(#bgblur_1_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter2_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
              fill="url(#glassFlapLinear)"
              fillOpacity="0.6"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="78.7048"
            y="20.823"
            width="501.297"
            height="136.012"
          >
            <div
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                clipPath: "url(#bgblur_2_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter3_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
              fill="url(#paint0_linear_51_65)"
              fillOpacity="0.75"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="1.2"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="78.7048"
            y="20.823"
            width="137.255"
            height="136.012"
          >
            <div
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                clipPath: "url(#bgblur_3_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter4_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
              fill="white"
              fillOpacity="0.45"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1"
              shapeRendering="crispEdges"
            />
          </g>

          <g
            filter="url(#filter5_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
              fill="white"
              fillOpacity="0.45"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1"
              shapeRendering="crispEdges"
            />
          </g>

          <defs>
            <filter
              id="filter0_i_51_65"
              x="123.766"
              y="79.1595"
              width="413"
              height="275.676"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_51_65"
              />
            </filter>
            <filter
              id="filter1_dddi_51_65"
              x="443.561"
              y="-10.5141"
              width="211.24"
              height="166.977"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_0_51_65_clip_path"
              transform="translate(-443.561 10.5141)"
            >
              <path d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z" />
            </clipPath>
            <filter
              id="filter2_dddi_51_65"
              x="-3.43323e-05"
              y="-10.9516"
              width="215.96"
              height="167.786"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_1_51_65_clip_path"
              transform="translate(3.43323e-05 10.9516)"
            >
              <path d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z" />
            </clipPath>
            <filter
              id="filter3_dddi_51_65"
              x="78.7048"
              y="20.823"
              width="501.297"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_2_51_65_clip_path"
              transform="translate(-78.7048 -20.823)"
            >
              <path d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z" />
            </clipPath>
            <filter
              id="filter4_dddi_51_65"
              x="78.7048"
              y="20.823"
              width="137.255"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_3_51_65_clip_path"
              transform="translate(-78.7048 -20.823)"
            >
              <path d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z" />
            </clipPath>
            <filter
              id="filter5_dddi_51_65"
              x="443.561"
              y="20.823"
              width="137.255"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <filter
              id="filter6_dddi_51_65"
              x="21.477"
              y="56.6875"
              width="612.444"
              height="212.562"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath id="bgblur_5_51_65_clip_path">
              <path d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z" />
            </clipPath>
            <clipPath id="center_box_clip">
              <rect x="123.766" y="0" width="413" height="352" />
            </clipPath>
            <linearGradient
              id="paint0_linear_51_65"
              x1="329.353"
              y1="42.8774"
              x2="329.353"
              y2="79.1144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="glassFlapLinear" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="white" stopOpacity="0.75" />
              <stop offset="1" stopColor="white" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="glassBodyLinear" x1="123" y1="79" x2="536" y2="351" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="glassFrontLinear" x1="74" y1="79" x2="581" y2="191" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.7" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.35" />
              <stop offset="1" stopColor="white" stopOpacity="0.55" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div
            className="relative w-full h-full flex justify-center items-center"
            style={{ paddingBottom: "65%" }}
          >
            <AnimatePresence mode="popLayout">
              {items.map((chip, index) => {
                if (index !== 0) return null;
                const IconComponent = chip.icon;

                return (
                  <motion.div
                    key={chip.id}
                    initial={{
                      y: -50,
                      opacity: 0,
                      scale: 0.75,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: 1.0,
                    }}
                    exit={{
                      y: 110,
                      opacity: 0,
                      scale: 0.75,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.455, 0.03, 0.515, 0.955],
                    }}
                    className="bg-white/50 backdrop-blur-xl border border-white/90 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.95),0_8px_25px_-5px_rgba(147,51,234,0.12)] z-10 rounded-full py-1.5 sm:py-2 px-3.5 sm:px-4 w-auto max-w-[280px] sm:max-w-[310px] absolute pointer-events-auto flex items-center gap-2.5 sm:gap-3 origin-bottom transform-gpu will-change-transform"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-white/90 text-zinc-800 shadow-2xs">
                      <IconComponent className="size-4 text-zinc-800" />
                    </div>
                    <div className="flex flex-col text-left justify-center gap-0.5">
                      <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                        {chip.title}
                      </span>
                      <span className="text-[11px] sm:text-xs text-zinc-600 font-medium leading-tight">
                        {chip.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          style={{
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {/* Top Layer Part 1: filter0 - Main Box Lower Body */}
          <g filter="url(#filter0_i_51_65)">
            <path
              d="M512.766 79.1595L147.766 79.1624C136.453 79.1625 130.796 79.1626 127.281 82.6773C123.766 86.192 123.766 91.8488 123.766 103.162V327.159C123.766 338.473 123.766 344.13 127.281 347.645C130.796 351.159 136.453 351.159 147.766 351.159H512.766C524.08 351.159 529.737 351.159 533.252 347.645C536.766 344.13 536.766 338.473 536.766 327.159V103.159C536.766 91.8457 536.766 86.1888 533.252 82.6741C529.737 79.1594 524.08 79.1594 512.766 79.1595Z"
              fill="url(#glassBodyLinear)"
              fillOpacity="0.45"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
              shapeRendering="crispEdges"
            />
          </g>

          {/* Top Layer Part 2: filter6 Blur (Clipped to Box Width) */}
          <g clipPath="url(#center_box_clip)">
            <foreignObject x="0" y="0" width="655" height="352">
              <div
                style={{
                  ...blurFilterStyleHeavy,
                  height: "100%",
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.01)",
                  clipPath:
                    "path('M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z')",
                }}
              ></div>
            </foreignObject>
          </g>

          {/* Top Layer Part 2: filter6 - Front Trapezoid Face */}
          <g
            filter="url(#filter6_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
              fill="url(#glassFrontLinear)"
              fillOpacity="0.6"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.8"
              shapeRendering="crispEdges"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Bucket;
