import React, { useState } from "react";
import { Copy, Check, Terminal as TerminalIcon } from "lucide-react";
import projectsData from "../data/projects.json";
import { profile } from "../data/profile";

export function TerminalMockup() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("profile.json");

  const jsonSnippet = {
    name: profile.name,
    title: profile.title,
    location: profile.location,
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "React", "Vue.js", "Docker", "Git", "GitHub"],
    projects: projectsData.filter((project) => project.featured).map(({ title, githubLink, liveLink }) => ({
      title,
      repository: githubLink,
      demo: liveLink,
    })),
  };

  const terminalContent = activeTab === "profile.json"
    ? JSON.stringify(jsonSnippet, null, 2)
    : `curl -L ${profile.githubUrl}/repos`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(terminalContent);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg border border-border bg-card/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs transition-all duration-300 hover:border-accent/80 hover:shadow-glow-accent">
      <div className="flex flex-wrap items-center justify-between gap-y-2 px-4 py-2.5 border-b border-border bg-background/90 select-none">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            <span>portfolio terminal</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <button
            type="button"
            aria-pressed={activeTab === "profile.json"}
            onClick={() => setActiveTab("profile.json")}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === "profile.json" ? "bg-accent/20 text-accent font-semibold" : "text-muted-foreground hover:text-primary"
            }`}
          >
            profile.json
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "curl"}
            onClick={() => setActiveTab("curl")}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === "curl" ? "bg-accent/20 text-accent font-semibold" : "text-muted-foreground hover:text-primary"
            }`}
          >
            repos.sh
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 rounded text-muted-foreground hover:text-accent transition-colors ml-1"
            title="Copy terminal snippet"
            aria-label="Copy terminal snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 overflow-x-auto terminal-scroll text-left leading-relaxed bg-[#0b0f19]">
        <div className="flex items-center gap-2 text-muted-foreground mb-3 text-[11px] border-b border-border/40 pb-2">
          <span className="text-emerald-400">tahmid@portfolio</span>
          <span className="text-muted-foreground/60">:</span>
          <span className="text-accent">~</span>
          <span className="text-primary">&gt;_</span>
          <span className="text-primary font-medium">{activeTab === "profile.json" ? "cat profile.json" : "list GitHub repositories"}</span>
        </div>
        <pre className="text-primary font-mono text-[11.5px] sm:text-xs">
          <code>{terminalContent}</code>
        </pre>
      </div>
    </div>
  );
}
