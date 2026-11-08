import React from "react";
import { Link } from "react-router-dom";
import { Mail, Terminal, ArrowUp, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-[#0b0f19] mt-20 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: System Branding */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded border border-accent/50 bg-accent/10 flex items-center justify-center text-accent">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-primary tracking-wide text-sm">{profile.name} · PORTFOLIO</span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-md">
              Early-career software developer building web applications with Laravel, React, and Tailwind CSS.
            </p>
            <div className="flex items-start gap-2 text-[11px] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              <span>Based in {profile.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="space-y-2">
            <span className="font-semibold uppercase tracking-wider text-[11px] block text-accent">
              Navigation Map
            </span>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  &gt; /root (Homepage)
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent transition-colors">
                  &gt; /projects (Catalog)
                </Link>
              </li>
              <li>
                <a href="/#skills" className="hover:text-accent transition-colors">
                  &gt; /tech-stack (Skills)
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-accent transition-colors">
                &gt; /experience
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-2">
            <span className="font-semibold uppercase tracking-wider text-[11px] block text-accent">
              Direct Comm Channels
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 group-hover:text-accent" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <FaGithub className="w-3.5 h-3.5 group-hover:text-accent" />
                  <span>github.com/Mr-Explorer142</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <FaLinkedin className="w-3.5 h-3.5 group-hover:text-accent" />
                  <span className="break-all">linkedin.com/in/tahmid-alam-tamim142</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-[11px]">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span className="min-w-0">Portfolio built with React + Vite + Tailwind CSS. Project demos run on Vercel and Laravel Cloud.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-center sm:text-right">© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-accent hover:text-primary transition-colors border border-border px-2 py-1 rounded bg-card/50"
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
