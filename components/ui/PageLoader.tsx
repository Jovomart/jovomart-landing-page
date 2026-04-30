"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if already loaded
    const hideLoader = () => {
      const minTime = 1400;
      const start = Date.now();
      const remaining = Math.max(0, minTime - (Date.now() - start));

      setTimeout(() => {
        setHidden(true);
        setTimeout(() => setRemoved(true), 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    // Failsafe - remove after 3 seconds max
    const failsafe = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 500);
    }, 3000);

    return () => {
      window.removeEventListener("load", hideLoader);
      clearTimeout(failsafe);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      role="status"
      aria-label="Loading JOVO"
      className={`fixed inset-0 z-[99999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,.15),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-[18px]">
        {/* Logo */}
        <div className="animate-loader-pulse drop-shadow-[0_0_24px_rgba(255,140,0,.5)]">
          <Image
            src="/images/Jovo_off_logo2.png"
            alt="JOVO"
            width={200}
            height={80}
            className="object-cover w-50 h-20"
            priority
          />
        </div>

        <p className="text-white/35 text-[11px] font-medium tracking-[.25em] uppercase">
          Your Campus Marketplace
        </p>

        {/* Loading bar */}
        <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-red to-brand-orange shadow-[0_0_10px_rgba(255,140,0,.7)] animate-loader-bar" />
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-loader-dot-1" />
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-loader-dot-2" />
          <span className="w-2 h-2 rounded-full bg-brand-red animate-loader-dot-3" />
        </div>
      </div>
    </div>
  );
}
