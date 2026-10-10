"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// --- Asset Constants ---
const HERO_FRONT =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/658f62c6-fdb2-41b9-aa0f-10837f9e72cb.png";
const HERO_BACK =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260914_123603_5ac5732a-900b-4919-9d9c-3c454194b0a5.png";
const MATERIAL_THUMB =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/96ef2bcd-ed69-4b7e-ab83-8a18d2129d99.png";

const AVATARS = [
  {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/caf08036-c63c-4d0c-9b81-43c5a7a49343.png",
    hue: 2,
    sat: 1.2,
    styleVars: { "--iw": "112.3%", "--il": "-5.84%", "--it": "-3.65%", background: "#1e3048" },
  },
  {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/599a5a28-c9f1-44f9-b01b-adb8b22e8c12.png",
    hue: 0,
    sat: 0.42,
    styleVars: { "--iw": "111.5%", "--il": "-8.82%", "--it": "-4.41%" },
  },
  {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc804805-b23c-40ba-97b0-9ab2ba3efb5d.png",
    hue: 6,
    sat: 1.3,
    styleVars: { "--iw": "113.1%", "--il": "-4.35%", "--it": "-0.72%" },
  },
  {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0cb0c1f0-f84a-47bb-bfa1-43b6c7f1575d.png",
    hue: 0,
    sat: 0.2,
    styleVars: { "--iw": "108.2%", "--il": "-6.82%", "--it": "0.76%" },
  },
  {
    url: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/64e651b1-a8ba-44e8-8fbe-e85fcd6e5cf0.png",
    hue: 0,
    sat: 0.68,
    styleVars: { "--iw": "114.8%", "--il": "-10.71%", "--it": "-2.14%" },
  },
];

export default function NivalHeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeAvatarIndex, setActiveAvatarIndex] = useState(0);
  const [isAwake, setIsAwake] = useState(false);
  const [toastText, setToastText] = useState<string | null>(null);
  const [isPhoneView, setIsPhoneView] = useState(false);

  // References for Spotlight Canvas logic
  const stageRef = useRef<HTMLDivElement>(null);
  const heroStackRef = useRef<HTMLDivElement>(null);
  const heroBackRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mount safety check for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toast Notification Trigger
  const triggerToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastText(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastText(null);
    }, 1700);
  }, []);

  // Responsive Layout Engine
  useEffect(() => {
    if (!mounted) return;

    const handleLayout = () => {
      const stage = stageRef.current;
      const isMobileScreen = window.innerWidth < 1024;
      setIsPhoneView(isMobileScreen);

      if (!stage) return;

      if (isMobileScreen) {
        stage.classList.remove("is-mobile", "is-fit");
        stage.classList.add("is-phone");
        stage.style.width = "";
        stage.style.height = "";
        stage.style.transform = "";
        return;
      }

      stage.classList.remove("is-phone");
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobileRatio = w / h < 1.05;
      stage.classList.toggle("is-mobile", isMobileRatio);

      const bh = isMobileRatio ? 1366 : 1024;
      const ideal = Math.round((bh * w) / h);
      const lo = isMobileRatio ? 560 : 1060;
      const hi = isMobileRatio ? 1450 : 2600;
      const bw = Math.max(lo, Math.min(hi, ideal));
      const s = Math.min(w / bw, h / bh);

      const hf = Math.min(79, (79 * (bw - 295)) / 965).toFixed(2) + "px";
      stage.style.setProperty("--hf", hf);
      stage.classList.toggle("is-fit", Math.abs(ideal - bw) > 1);

      stage.style.width = bw + "px";
      stage.style.height = bh + "px";
      stage.style.transform = `translate(-50%, -50%) scale(${s})`;
    };

    handleLayout();
    window.addEventListener("resize", handleLayout);
    return () => window.removeEventListener("resize", handleLayout);
  }, [mounted]);

  // Spotlight Reveal Canvas Engine (Supports Pointer & Touch)
  useEffect(() => {
    if (!mounted) return;

    const stack = heroStackRef.current;
    const back = heroBackRef.current;
    const canvas = canvasRef.current;
    if (!stack || !back || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPOTLIGHT_R = 185;
    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = stack.offsetWidth;
      canvas.height = stack.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const updateCoordinates = (clientX: number, clientY: number) => {
      const r = stack.getBoundingClientRect();
      const sx = stack.offsetWidth / r.width;
      const sy = stack.offsetHeight / r.height;
      mouse.x = (clientX - r.left) * sx;
      mouse.y = (clientY - r.top) * sy;
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    stack.addEventListener("pointermove", handlePointerMove);
    stack.addEventListener("pointerleave", handlePointerLeave);
    stack.addEventListener("touchmove", handleTouchMove, { passive: true });
    stack.addEventListener("touchend", handlePointerLeave);

    const render = (x: number, y: number) => {
      if (!ctx || canvas.width === 0 || canvas.height === 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.62, "rgba(255,255,255,1)");
      grad.addColorStop(0.8, "rgba(255,255,255,0.5)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fill();

      const url = canvas.toDataURL();
      back.style.maskImage = `url(${url})`;
      back.style.webkitMaskImage = `url(${url})`;
    };

    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;
      render(smooth.x, smooth.y);
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      stack.removeEventListener("pointermove", handlePointerMove);
      stack.removeEventListener("pointerleave", handlePointerLeave);
      stack.removeEventListener("touchmove", handleTouchMove);
      stack.removeEventListener("touchend", handlePointerLeave);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full min-h-[90vh] bg-[#d6e6f5] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#06192f] border-t-transparent animate-spin" />
      </section>
    );
  }

  const selectAvatar = (index: number) => {
    const wrappedIndex = (index + 5) % 5;
    setActiveAvatarIndex(wrappedIndex);
    const padded = String(wrappedIndex + 1).padStart(2, "0");
    triggerToast(`Identity ${padded}`);
  };

  const togglePlay = () => {
    setIsAwake((prev) => {
      const next = !prev;
      triggerToast(next ? "Identity activated" : "Identity paused");
      return next;
    });
  };

  const toggleEye = () => {
    setIsAwake((prev) => {
      const next = !prev;
      triggerToast(next ? "Previewing live identity" : "Preview paused");
      return next;
    });
  };

  const currentAvatar = AVATARS[activeAvatarIndex];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#d6e6f5] font-sans text-[#06192f] select-none pt-16 lg:pt-0">
      {/* Viewport wrapper with smooth radial backdrop & noise */}
      <div className="fixed inset-0 overflow-hidden isolation-isolate bg-[radial-gradient(circle_at_44%_28%,#e8f3fb_0%,#e8f3fb_6%,#d9e9f6_30%,#d6e6f5_68%,#d4e5f4_100%)] pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.13] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.32'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* MOBILE RESPONSIVE FLUID VIEW (Screens < 1024px) */}
      {isPhoneView ? (
        <div
          className="relative z-10 max-w-lg mx-auto px-4 py-8 flex flex-col gap-6"
          style={{
            "--hero-hue": `${currentAvatar.hue}deg`,
            "--hero-sat": currentAvatar.sat,
          } as React.CSSProperties}
        >
          {/* Mobile Headline */}
          <div className="text-center pt-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#06192f]">
              Cyberspace — reality
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-xl sm:text-2xl font-normal text-[#06192f]">
              <svg className="w-8 h-4 fill-[#06192f]" viewBox="0 0 151 48">
                <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24c9.19 0 17.153-5.183 21.135-12.783a23.905 23.905 0 0110.73 0C59.847 42.817 67.81 48 77 48c9.19 0 17.153-5.183 21.135-12.783a23.905 23.905 0 0110.73 0C112.847 42.817 120.81 48 130 48c13.255 0 24-10.745 24-24S143.255 0 130 0c-9.19 0-17.153 5.183-21.135 12.783a23.905 23.905 0 01-10.73 0C94.153 5.183 86.19 0 77 0c-9.19 0-17.153 5.183-21.135 12.783a23.905 23.905 0 01-10.73 0C41.153 5.183 33.19 0 24 0zm0 7c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17zm53 0c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17zm53 0c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17z" />
              </svg>
              <span>merge with the virtual</span>
            </div>
          </div>

          {/* Mobile Creator Badge & Features */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#77899b]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#06192f] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 stroke-white stroke-[2]" viewBox="0 0 12 12">
                  <path d="M2.2 6.2 4.7 8.5 9.8 3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-semibold text-[#06192f]">By Nival_02</span>
            </div>
            <div className="flex gap-2 text-[#77899c] font-medium">
              <span>Web based /01</span>
              <span>·</span>
              <span>Real-time /03</span>
            </div>
          </div>

          {/* Mobile Interactive Hero Spotlight Container */}
          <div className="relative w-full aspect-[4/5] max-w-[340px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#e8f3fb]/60 to-[#d4e5f4]/80 border border-white/50">
            <div ref={heroStackRef} className="relative w-full h-full touch-none">
              <img
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none z-[1] transition-[filter] duration-300 drop-shadow-xl ${
                  isAwake ? "animate-breathe-glow" : ""
                }`}
                src={HERO_FRONT}
                alt="White and silver female android"
                style={{
                  filter: `drop-shadow(6px 12px 18px rgba(35,57,79,0.15)) hue-rotate(var(--hero-hue, 0deg)) saturate(var(--hero-sat, 1))`,
                }}
              />
              <img
                ref={heroBackRef}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-[2]"
                src={HERO_BACK}
                alt="Armored reveal variant"
                aria-hidden="true"
              />
              <canvas ref={canvasRef} className="hidden pointer-events-none" aria-hidden="true" />
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#06192f]/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] pointer-events-none font-medium">
              👆 Touch & Drag to Reveal Armor
            </div>
          </div>

          {/* Mobile Identity Gallery Switcher */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
            {AVATARS.map((av, idx) => (
              <button
                key={idx}
                onClick={() => selectAvatar(idx)}
                className={`w-14 h-14 rounded-full border-4 overflow-hidden shrink-0 transition-all ${
                  activeAvatarIndex === idx
                    ? "border-[#06192f] scale-110 shadow-lg"
                    : "border-white/80 opacity-70"
                }`}
              >
                <img src={av.url} alt={`Avatar 0${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Mobile Glass Card */}
          <div className="w-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="bg-[#06192f] text-white px-4 py-1.5 rounded-full text-center">
                <span className="text-sm font-bold block">+105</span>
                <span className="text-[10px] text-zinc-300 block">kinds of avatars</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleEye}
                  className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-xs"
                >
                  👁️
                </button>
                <button
                  onClick={togglePlay}
                  className={`w-12 h-12 rounded-full bg-[#06192f] text-white flex items-center justify-center font-bold shadow-lg transition-transform ${
                    isAwake ? "scale-105 ring-4 ring-blue-400/40" : ""
                  }`}
                >
                  ▶
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium leading-relaxed text-[#06192f]">
              Explore digital identities, crafted for a new kind of presence.
            </p>
          </div>

          {/* Mobile Material Pill */}
          <div className="w-full bg-[#06192f] text-white rounded-3xl p-3 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <img src={MATERIAL_THUMB} alt="Material" className="w-12 h-12 object-contain rounded-xl" />
              <div className="text-xs font-semibold leading-tight">
                Adaptive<br />materials
              </div>
            </div>
            <button
              onClick={() => selectAvatar(activeAvatarIndex + 1)}
              className="w-10 h-10 rounded-full bg-white text-[#06192f] flex items-center justify-center font-bold"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        /* DESKTOP STAGE CANVAS VIEW (Screens >= 1024px) */
        <div
          ref={stageRef}
          className="absolute left-1/2 top-1/2 w-[1536px] h-[1024px] origin-center overflow-hidden z-10 transition-transform duration-100 ease-out bg-[radial-gradient(circle_at_43%_35%,rgba(246,251,255,0.74),transparent_31%),linear-gradient(112deg,#d6e6f5_0%,#d9e9f6_44%,#d4e5f4_100%)]"
          style={{
            "--fx": "0px",
            "--hero-hue": `${currentAvatar.hue}deg`,
            "--hero-sat": currentAvatar.sat,
          } as React.CSSProperties}
        >
          {/* Headline */}
          <h1
            id="home"
            className="absolute left-[calc(var(--fx)+45px)] top-[98px] w-[960px] text-[length:var(--hf,79px)] leading-[0.99] tracking-[-0.019em] word-spacing-[0.0633em] font-normal z-[8]"
          >
            <span className="block whitespace-nowrap tracking-[-0.02975em]">
              Cyberspace — reality
            </span>
            <span className="flex items-center gap-[0.2658em] mt-[2px] whitespace-nowrap">
              <svg
                className="w-[1.9114em] h-[0.6076em] shrink-0 overflow-visible fill-[#06192f]"
                viewBox="0 0 151 48"
                aria-hidden="true"
              >
                <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24c9.19 0 17.153-5.183 21.135-12.783a23.905 23.905 0 0110.73 0C59.847 42.817 67.81 48 77 48c9.19 0 17.153-5.183 21.135-12.783a23.905 23.905 0 0110.73 0C112.847 42.817 120.81 48 130 48c13.255 0 24-10.745 24-24S143.255 0 130 0c-9.19 0-17.153 5.183-21.135 12.783a23.905 23.905 0 01-10.73 0C94.153 5.183 86.19 0 77 0c-9.19 0-17.153 5.183-21.135 12.783a23.905 23.905 0 01-10.73 0C41.153 5.183 33.19 0 24 0zm0 7c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17zm53 0c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17zm53 0c9.389 0 17 7.611 17 17s-7.611 17-17 17-17-7.611-17-17 7.611-17 17-17z" />
              </svg>
              <span>merge with the virtual</span>
            </span>
          </h1>

          {/* Features list */}
          <div className="absolute right-[calc(var(--fx)+44px)] top-[157px] w-[190px] grid gap-[11px] z-[10] text-[20px] leading-[1.1] text-right">
            <div className="flex justify-end gap-[18px] whitespace-nowrap">
              <span className="font-normal">Web based</span>
              <span className="font-normal text-[#77899c]">/01</span>
            </div>
            <div className="flex justify-end gap-[18px] whitespace-nowrap">
              <span className="font-normal">Collaborative</span>
              <span className="font-normal text-[#77899c]">/02</span>
            </div>
            <div className="flex justify-end gap-[18px] whitespace-nowrap">
              <span className="font-normal">Real-time</span>
              <span className="font-normal text-[#77899c]">/03</span>
            </div>
          </div>

          {/* Creator badge */}
          <div className="absolute right-[calc(var(--fx)+390px)] top-[311px] z-[12] flex items-start text-[#77899b]">
            <div className="w-[19px] h-[19px] rounded-full bg-[#06192f] mr-[10px] mt-[1px] flex items-center justify-center shrink-0">
              <svg
                className="w-[11px] h-[11px] stroke-white stroke-[2.2] fill-none"
                viewBox="0 0 12 12"
              >
                <path d="M2.2 6.2 4.7 8.5 9.8 3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-[16px] leading-[1.25]">
              <div>By Nival_02</div>
              <div className="mt-[9px] text-[#8496a8]">Identity series · 02</div>
            </div>
          </div>

          {/* Glass Card */}
          <div className="absolute left-[calc(var(--fx)+46px)] top-[344px] w-[365px] h-[211px] px-[25px] pt-[9px] pb-[18px] border border-white/45 rounded-[24px] z-[14] bg-gradient-to-br from-white/55 to-[#eff7fd]/42 shadow-[inset_0_0_22px_rgba(255,255,255,0.32),0_7px_26px_rgba(65,94,123,0.045)] backdrop-blur-[20px]">
            <div className="h-[60px] flex justify-between items-start">
              <div className="-ml-[20px] px-[21px] pt-[8px] pb-[7px] rounded-[26px] text-white bg-gradient-to-br from-[#0b2b50] to-[#06192f] min-w-[124px] text-center">
                <strong className="block text-[20px] leading-[19px] font-medium">
                  +105
                </strong>
                <small className="block text-[12px] mt-[3px] opacity-80">
                  kinds of avatars
                </small>
              </div>
              <button
                onClick={toggleEye}
                className="w-[38px] h-[38px] -mr-[6px] mt-[10px] rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
                aria-label="Preview live identity"
              >
                <svg
                  className="w-[33px] h-[23px] stroke-[#06192f] stroke-[1.8] fill-none"
                  viewBox="0 0 32 22"
                >
                  <path d="M2 11C2 11 7 3 16 3C25 3 30 11 30 11C30 11 25 19 16 19C7 19 2 11 2 11Z" />
                  <circle cx="16" cy="11" r="3.5" />
                </svg>
              </button>
            </div>

            <p className="my-[15px] text-[18px] leading-[1.32] tracking-[-0.14px]">
              Explore digital identities, crafted
              <br />
              for a new kind of presence.
            </p>

            <div className="absolute left-[25px] right-[18px] bottom-[15px] h-[60px] flex items-center">
              <div className="text-[18px] leading-[18px]">
                Start
                <br />
                <strong className="text-[21px] font-bold">creating</strong>
              </div>

              <button
                onClick={() => selectAvatar(activeAvatarIndex + 1)}
                className="w-[42px] h-[42px] rounded-full ml-auto mr-[26px] flex items-center justify-center hover:bg-white/58 transition-colors"
                aria-label="Shuffle avatar"
              >
                <svg
                  className="w-[27px] h-[27px] stroke-[#06192f] stroke-[1.5] fill-none"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M4 8h5l12 14h5M21 8h5M4 22h5l3-3.5"
                    strokeLinecap="round"
                  />
                  <path d="m23 5 4 3-4 3M23 19l4 3-4 3" strokeLinecap="round" />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className={`w-[58px] h-[58px] rounded-full bg-[#06192f] shadow-[0_5px_14px_rgba(8,26,46,0.12)] flex items-center justify-center transition-all hover:scale-[1.05] ${
                  isAwake
                    ? "shadow-[0_0_0_7px_rgba(17,105,220,0.12),0_0_32px_rgba(17,105,220,0.38)]"
                    : ""
                }`}
                aria-pressed={isAwake}
                aria-label="Toggle awake breathing animation"
              >
                <svg
                  className="w-[24px] h-[26px] fill-white ml-[4px]"
                  viewBox="0 0 24 26"
                >
                  <path d="m3 2 19 12L3 26z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Ghost Typography */}
          <div
            className="absolute z-[2] text-white/43 font-bold tracking-[-9px] leading-[0.8] pointer-events-none left-[calc(var(--fx)+31px)] top-[594px] text-[189px] origin-left scale-x-[1.23]"
            aria-hidden="true"
          >
            R<i className="inline-block w-[105px] not-italic" />
            BO
          </div>
          <div
            className="absolute z-[2] text-white/43 font-bold tracking-[-9px] leading-[0.8] pointer-events-none left-[calc(50%-16px)] top-[745px] text-[164px]"
            aria-hidden="true"
          >
            FORM
          </div>

          {/* Robo-O Avatar */}
          <div
            className="absolute left-[calc(var(--fx)+174px)] top-[600px] w-[143px] h-[143px] border-[8px] border-white/56 rounded-full overflow-hidden bg-[#92b2d1]/13 z-[4] pointer-events-none"
            aria-hidden="true"
          >
            <img
              src={HERO_FRONT}
              alt="Robo-O digital avatar preview"
              className="absolute left-[-4px] top-[5px] w-[116px] h-[147px] object-contain drop-shadow-[3px_5px_8px_rgba(35,57,79,0.12)]"
            />
          </div>

          {/* SPOTLIGHT REVEAL HERO CONTAINER */}
          <div
            id="hero"
            className={`absolute left-[calc(50%-373px)] top-[265px] w-[600px] h-[759px] z-[7] pointer-events-none ${
              isAwake ? "animate-breathe" : ""
            }`}
          >
            <div ref={heroStackRef} className="relative w-full h-full pointer-events-auto">
              <img
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none z-[1] transition-[filter] duration-400 ease-out drop-shadow-[12px_17px_24px_rgba(35,57,79,0.12)] ${
                  isAwake ? "animate-breathe-glow" : ""
                }`}
                src={HERO_FRONT}
                alt="White and silver female android"
                style={{
                  filter: `drop-shadow(12px 17px 24px rgba(35,57,79,0.12)) hue-rotate(var(--hero-hue, 0deg)) saturate(var(--hero-sat, 1))`,
                }}
              />
              <img
                ref={heroBackRef}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-[2] mask-no-repeat mask-size-full"
                src={HERO_BACK}
                alt="Armored reveal variant"
                aria-hidden="true"
              />
              <canvas ref={canvasRef} className="hidden pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Material Thumbnail Pill */}
          <div className="absolute right-[calc(var(--fx)+44px)] top-[413px] w-[345px] h-[140px] z-[13]">
            <div className="absolute right-0 bottom-[1px] w-[345px] h-[76px] rounded-[41px] bg-[#06192f] flex items-center overflow-visible">
              <div className="absolute left-0 bottom-[1px] w-[141px] h-[180px] overflow-hidden rounded-bl-[38px] z-[2]">
                <img
                  src={MATERIAL_THUMB}
                  alt="Adaptive material"
                  className="absolute -left-[25px] top-[35px] w-[168px] h-[153px] object-contain"
                />
              </div>
              <div className="ml-[146px] text-white text-[17px] leading-[1.25] w-[95px]">
                Adaptive
                <br />
                materials
              </div>
              <button
                onClick={() => selectAvatar(activeAvatarIndex + 1)}
                className="ml-auto mr-[6px] w-[65px] h-[65px] rounded-full bg-[#f5f9fc] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Next material variant"
              >
                <svg
                  className="w-[30px] h-[30px] stroke-[#06192f] stroke-[2.4] fill-none"
                  viewBox="0 0 32 32"
                >
                  <path d="M7 8 24 25M12 25h12V13" />
                </svg>
              </button>
            </div>
          </div>

          {/* Gallery buttons */}
          <div className="absolute right-[calc(var(--fx)+43px)] bottom-[46px] w-[439px] h-[296px] z-[12]">
            {AVATARS.map((av, idx) => {
              const positions = [
                "left-[160px] top-[1px]",
                "left-[312px] top-0",
                "left-0 top-[158px]",
                "left-[155px] top-[157px]",
                "left-[310px] top-[158px]",
              ];
              const isActive = activeAvatarIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => selectAvatar(idx)}
                  className={`absolute ${positions[idx]} w-[138px] h-[138px] border-[8px] rounded-full overflow-hidden bg-[#f0f7fc]/56 p-0 transition-all duration-220 cursor-pointer ${
                    isActive
                      ? "border-white shadow-[0_0_0_2px_rgba(17,105,220,0.18),0_8px_20px_rgba(46,74,101,0.12)] scale-[1.03]"
                      : "border-[#f7fbff]/72 hover:border-white/97 hover:shadow-[0_0_0_2px_rgba(17,105,220,0.18)]"
                  }`}
                  style={av.styleVars as React.CSSProperties}
                  aria-label={`Select Identity 0${idx + 1}`}
                >
                  <img
                    src={av.url}
                    alt={`Avatar 0${idx + 1}`}
                    className="w-[var(--iw,112%)] h-[var(--iw,112%)] object-contain translate-x-[var(--il,-6%)] translate-y-[var(--it,-3%)]"
                  />
                </button>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="absolute left-[calc(var(--fx)+46px)] bottom-[35px] flex gap-[17px] z-[18]">
            {[
              {
                name: "Instagram",
                svg: (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                ),
              },
              {
                name: "Facebook",
                svg: (
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                ),
              },
              {
                name: "Telegram",
                svg: (
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.23.17.323.016.094.035.311.019.479z" />
                ),
              },
            ].map((soc, idx) => (
              <button
                key={idx}
                onClick={() => triggerToast(`${soc.name} selected`)}
                className="w-[43px] h-[43px] rounded-full bg-[#f5f9fd]/55 backdrop-blur-[8px] flex items-center justify-center fill-[#06192f] hover:bg-white hover:outline-2 hover:outline-[#1169dc]/18 transition-all"
                aria-label={soc.name}
              >
                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
                  {soc.svg}
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      <div
        className={`fixed left-1/2 bottom-[30px] z-[50] -translate-x-1/2 px-[18px] py-[11px] rounded-[22px] text-white bg-[#06192f]/90 text-[14px] pointer-events-none transition-all duration-240 ${
          toastText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
        }`}
        role="status"
        aria-live="polite"
      >
        {toastText}
      </div>

      {/* Embedded Animation Styles */}
      <style jsx global>{`
        @keyframes breathe {
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes breatheGlow {
          50% {
            filter: drop-shadow(10px 15px 34px rgba(16, 105, 220, 0.2))
              hue-rotate(var(--hero-hue, 0deg)) saturate(var(--hero-sat, 1.08));
          }
        }
        .animate-breathe {
          animation: breathe 3.5s ease-in-out infinite;
        }
        .animate-breathe-glow {
          animation: breatheGlow 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
