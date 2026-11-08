import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, FolderGit2, House, Mail, Send, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";
import { Button } from "./ui/button";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCatalog = location.pathname === "/projects";
  const isContact = location.pathname === "/contact";
  const isPublication = location.pathname === "/research";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-16 flex flex-wrap items-center justify-between gap-y-2 py-2 md:h-16 md:flex-nowrap md:py-0">
        <Link
          to="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
          aria-label={`${profile.name} home`}
        >
          <div className="w-8 h-8 rounded border border-accent/60 bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-200 shadow-glow-subtle">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-primary flex items-center gap-1.5">
              <span className="text-accent">&gt;_</span>
              <span className="sm:hidden">Tahmid</span>
              <span className="hidden sm:inline">{profile.name}</span>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-0.5">
              Software Developer
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center justify-center gap-0 border-t border-border/70 pt-2 font-mono text-[9px] sm:gap-1 sm:text-xs md:order-none md:w-auto md:border-0 md:pt-0"
        >
          <Link
            to="/"
            aria-current={isHome ? "page" : undefined}
            className={`inline-flex items-center gap-1 px-1 py-1.5 rounded transition-colors sm:gap-1.5 sm:px-3 ${
              isHome
                ? "text-accent bg-accent/10 border border-accent/30 font-semibold"
                : "text-muted-foreground hover:text-primary hover:bg-card/50"
            }`}
          >
            <House className="w-3 h-3 sm:h-3.5 sm:w-3.5" />
            Home
          </Link>
          <Link
            to="/projects"
            aria-current={isCatalog ? "page" : undefined}
            className={`inline-flex items-center gap-1 px-1 py-1.5 rounded transition-colors sm:gap-1.5 sm:px-3 ${
              isCatalog
                ? "text-accent bg-accent/10 border border-accent/30 font-semibold"
                : "text-muted-foreground hover:text-primary hover:bg-card/50"
            }`}
          >
            <FolderGit2 className="w-3 h-3 sm:h-3.5 sm:w-3.5" />
            Projects
          </Link>
          <Link
            to="/research"
            aria-current={isPublication ? "page" : undefined}
            className={`inline-flex items-center gap-1 px-1 py-1.5 rounded transition-colors sm:gap-1.5 sm:px-3 ${
              isPublication
                ? "text-accent bg-accent/10 border border-accent/30 font-semibold"
                : "text-muted-foreground hover:text-primary hover:bg-card/50"
            }`}
          >
            <BookOpen className="w-3 h-3 sm:h-3.5 sm:w-3.5" />
            Research
          </Link>
          <Link
            to="/contact"
            aria-current={isContact ? "page" : undefined}
            className={`inline-flex items-center gap-1 px-1 py-1.5 rounded transition-colors sm:gap-1.5 sm:px-3 ${
              isContact
                ? "text-accent bg-accent/10 border border-accent/30 font-semibold"
                : "text-muted-foreground hover:text-primary hover:bg-card/50"
            }`}
          >
            <Mail className="w-3 h-3 sm:h-3.5 sm:w-3.5" />
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-r border-border pr-2 sm:pr-3 mr-1">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors"
              aria-label="GitHub profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors"
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <Link to="/contact">
            <Button size="sm" variant="cyber" className="hidden sm:inline-flex gap-1.5">
              <Send className="w-3 h-3" />
              <span>Let’s Talk</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
