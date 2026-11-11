import React, { useEffect, useLayoutEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function IntroLoader() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useLayoutEffect(() => {
    document.documentElement.classList.remove("app-preloading");
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), reducedMotion ? 250 : 2500);
    const removeTimer = window.setTimeout(() => setIsMounted(false), reducedMotion ? 300 : 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isMounted) document.body.style.overflow = "";
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className={`intro-loader fixed inset-0 z-[100] flex items-center justify-center bg-background ${isLeaving ? "intro-loader-leaving" : ""}`} aria-label="Loading portfolio" role="status">
      <div className="intro-loader-grid absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <div className="intro-logo-mark flex h-16 w-16 items-center justify-center rounded-xl border border-accent/70 bg-accent/10 text-accent shadow-glow-accent">
          <Terminal className="h-8 w-8" aria-hidden="true" />
        </div>
        <div className="font-mono">
          <p className="intro-kicker text-xs uppercase tracking-[0.35em] text-accent">Initializing portfolio</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Mr.Explorer</p>
          <p className="intro-command mt-3 text-xs text-muted-foreground"><span className="text-accent">&gt;_</span> load experience<span className="intro-cursor ml-1">▋</span></p>
        </div>
      </div>
    </div>
  );
}
