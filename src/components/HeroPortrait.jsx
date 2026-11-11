import React, { useState } from "react";
import { Braces, Code2, Database, Server } from "lucide-react";

const technologies = [
  { name: "Laravel", icon: Server, position: "hero-tech-laravel" },
  { name: "React", icon: Code2, position: "hero-tech-react" },
  { name: "MySQL", icon: Database, position: "hero-tech-mysql" },
  { name: "REST API", icon: Braces, position: "hero-tech-api" },
];

export function HeroPortrait({ name, title, imageSrc }) {
  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleTechnologyToggle = (event) => {
    if (event.target.closest("a, button")) return;
    setShowTechnologies((visible) => !visible);
  };

  return (
    <div
      className={`group order-1 relative mx-auto w-full max-w-[500px] px-3 pb-16 pt-3 sm:px-8 sm:pb-20 lg:order-2 lg:col-span-5 lg:px-0 ${showTechnologies ? "hero-tech-visible" : ""}`}
      onClick={handleTechnologyToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setShowTechnologies((visible) => !visible);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Show or hide technology skills"
    >
      <div className="hero-portrait-glow absolute inset-x-8 top-10 aspect-[4/5] rounded-[2rem]" />

      <div className="terminal-frame hero-float-frame relative z-10 overflow-hidden rounded-xl border border-accent/50 bg-white shadow-2xl shadow-cyan-950/40 dark:bg-[#0b0f19]">
        <div className="terminal-header flex h-11 items-center gap-3 border-b border-slate-200 bg-slate-100 px-4 font-mono text-[11px] dark:border-white/10 dark:bg-[#151d2a]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="ml-2 flex h-full items-center border-b border-accent px-3 text-slate-700 dark:text-slate-200">
            <Code2 className="mr-2 h-3.5 w-3.5 text-accent" />
            tamim.jsx
          </div>
          <span className="ml-auto text-slate-500 dark:text-slate-400">TSX</span>
        </div>

        <div className="hero-portrait-scan relative aspect-[4/4.5] overflow-hidden">
          <img
            src={imageSrc}
            alt={`Portrait of ${name}`}
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08121b]/80 via-transparent to-cyan-950/10" />
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-100 px-4 py-2 font-mono text-[10px] text-slate-600 dark:border-white/10 dark:bg-[#111925] dark:text-slate-300">
          <span>{name}</span>
          <span className="text-accent">Ln 01, Col 01</span>
        </div>
      </div>

      {technologies.map(({ name: technology, icon: Icon, position }, index) => (
        <div
          key={technology}
          className={`hero-float-badge ${position} absolute z-20 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-950/75 px-3 py-2 font-mono text-[11px] font-medium text-slate-100 shadow-lg shadow-black/20 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${showTechnologies ? "hero-tech-badge-visible" : ""}`}
          style={{ "--float-delay": `${index * 350}ms` }}
        >
          <Icon className="h-3.5 w-3.5 text-accent" />
          {technology}
        </div>
      ))}

      <p className="sr-only">{title}</p>
    </div>
  );
}
