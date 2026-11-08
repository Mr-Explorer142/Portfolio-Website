import React from "react";
import { Braces, Code2, Database, Server } from "lucide-react";

const technologies = [
  { name: "Laravel", icon: Server, position: "hero-tech-laravel" },
  { name: "React", icon: Code2, position: "hero-tech-react" },
  { name: "MySQL", icon: Database, position: "hero-tech-mysql" },
  { name: "REST API", icon: Braces, position: "hero-tech-api" },
];

export function HeroPortrait({ name, title, imageSrc }) {
  return (
    <div className="order-1 relative mx-auto w-full max-w-[500px] px-3 pb-16 pt-3 sm:px-8 sm:pb-20 lg:order-2 lg:col-span-5 lg:px-0">
      <div className="hero-portrait-glow absolute inset-x-8 top-10 aspect-[4/5] rounded-[2rem]" />

      <div className="hero-float-frame relative z-10 overflow-hidden rounded-xl border border-accent/50 bg-[#0b0f19] shadow-2xl shadow-cyan-950/40">
        <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-[#151d2a] px-4 font-mono text-[11px]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="ml-2 flex h-full items-center border-b border-accent px-3 text-primary">
            <Code2 className="mr-2 h-3.5 w-3.5 text-accent" />
            tamim.tsx
          </div>
          <span className="ml-auto text-muted-foreground">TSX</span>
        </div>

        <div className="hero-portrait-scan relative aspect-[4/4.5] overflow-hidden">
          <img
            src={imageSrc}
            alt={`Portrait of ${name}`}
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08121b]/80 via-transparent to-cyan-950/10" />
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-[#111925] px-4 py-2 font-mono text-[10px] text-muted-foreground">
          <span>{name}</span>
          <span className="text-accent">Ln 01, Col 01</span>
        </div>
      </div>

      {technologies.map(({ name: technology, icon: Icon, position }, index) => (
        <div
          key={technology}
          className={`hero-float-badge ${position} absolute z-20 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-950/75 px-3 py-2 font-mono text-[11px] font-medium text-slate-100 shadow-lg shadow-black/20 backdrop-blur-md`}
          style={{ "--float-delay": `${index * 350}ms` }}
        >
          <Icon className="h-3.5 w-3.5 text-accent" />
          {technology}
        </div>
      ))}

      <div className="hero-code-card absolute bottom-1 right-0 z-30 w-[min(270px,78%)] rounded-lg border border-accent/30 bg-[#0b1220]/95 p-3 font-mono text-[10px] leading-relaxed shadow-xl shadow-black/40 backdrop-blur-md sm:bottom-0 sm:right-1">
        <p><span className="text-fuchsia-300">const</span> <span className="text-sky-200">dev</span> <span className="text-slate-400">=</span> <span className="text-slate-300">{"{"}</span></p>
        <p className="pl-3"><span className="text-sky-200">name</span><span className="text-slate-400">:</span> <span className="text-emerald-300">"Tamim"</span><span className="text-slate-400">,</span></p>
        <p className="pl-3"><span className="text-sky-200">stack</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span><span className="text-emerald-300">"Laravel"</span><span className="text-slate-400">, </span><span className="text-emerald-300">"React"</span><span className="text-slate-300">]</span><span className="text-slate-400">,</span></p>
        <p className="pl-3"><span className="text-sky-200">coffee</span><span className="text-slate-400">:</span> <span className="text-amber-300">true</span></p>
        <p><span className="text-slate-300">{"}"}</span><span className="hero-cursor ml-1 inline-block h-3 w-[2px] translate-y-0.5 bg-accent" /></p>
      </div>

      <p className="sr-only">{title}</p>
    </div>
  );
}
