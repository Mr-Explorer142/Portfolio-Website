import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Database,
  GitBranch,
  Terminal,
  Send,
  Cloud,
  Box,
  BookOpen,
  Triangle,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  Server,
  Sparkles,
  Wrench,
  FileDown,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import projectsData from "../data/projects.json";
import { profile } from "../data/profile";
import { ContactSection } from "../components/ContactSection";
import { PublicationSection } from "../components/PublicationSection";
import { ProjectImage } from "../components/ProjectImage";
import { TerminalMockup } from "../components/TerminalMockup";
import { HeroPortrait } from "../components/HeroPortrait";
import { TypewriterText } from "../components/TypewriterText";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "PHP", "Python"],
  },
  {
    category: "Frontend",
    icon: Layers,
    skills: ["Bootstrap", "Tailwind CSS", "Vue.js", "React"],
  },
  {
    category: "Backend Framework",
    icon: Server,
    skills: ["Laravel"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Linux", "Shell Scripting", "Postman", "Notion", "Vercel", "Laravel Cloud"],
  },
];

const skillIcons = {
  JavaScript: Code2,
  PHP: Code2,
  Python: Code2,
  Bootstrap: Layers,
  "Tailwind CSS": Layers,
  "Vue.js": Layers,
  React: Layers,
  Laravel: Server,
  MySQL: Database,
  PostgreSQL: Database,
  Git: GitBranch,
  GitHub: FaGithub,
  Docker: Box,
  Linux: Terminal,
  "Shell Scripting": Terminal,
  Postman: Send,
  Notion: BookOpen,
  Vercel: Triangle,
  "Laravel Cloud": Cloud,
};

export function Homepage() {
  return (
    <div className="relative">
      <div className="hero-dot-grid absolute inset-0 pointer-events-none opacity-30 z-0" />

      <section className="relative z-10 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
            <HeroPortrait
              name={profile.name}
              title={profile.title}
              imageSrc="/images/profile-placeholder.jpg"
            />

            <div className="order-2 space-y-6 text-left lg:order-1 lg:col-span-7">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {profile.title} · {profile.location}
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight text-primary leading-[1.1] sm:text-5xl lg:text-6xl">
                Hi, I’m {profile.name}.
                <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-300 to-primary">
                  I build <TypewriterText />.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I create reliable full-stack web experiences, from backend APIs to polished interfaces.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <a href="#projects" className="w-full sm:w-auto">
                  <Button variant="accent" className="w-full gap-1 px-2 text-[10px] shadow-glow-accent transition-transform hover:-translate-y-0.5 hover:shadow-glow-accent sm:w-auto sm:gap-2 sm:px-6 sm:text-sm sm:h-12">
                    <span>$ explore --projects</span>
                  </Button>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full gap-1 px-2 text-[10px] transition-all hover:-translate-y-0.5 hover:shadow-glow-subtle sm:w-auto sm:gap-2 sm:px-6 sm:text-sm sm:h-12">
                    <FileDown className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                    <span>Resume</span>
                  </Button>
                </a>
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full gap-1 px-2 text-[10px] transition-all hover:-translate-y-0.5 hover:shadow-glow-subtle sm:w-auto sm:gap-2 sm:px-6 sm:text-sm sm:h-12">
                    <GitBranch className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                    <span>Project Catalog</span>
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="cyber" className="w-full gap-1 px-2 text-[10px] transition-all hover:-translate-y-0.5 sm:w-auto sm:gap-2 sm:px-6 sm:text-sm sm:h-12">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    Contact Me
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-5 font-mono">
                <div>
                  <p className="text-lg font-bold text-primary">02+</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">04</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Core technologies</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">01</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Publication</p>
                </div>
              </div>
            </div>

            <div className="order-3 lg:col-span-12">
              <TerminalMockup />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" data-scroll-reveal className="py-20 border-t border-border relative z-10 bg-card/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>PROJECTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Selected Projects</h2>
              <p className="text-muted-foreground text-sm mt-1 max-w-xl font-mono">
                Academic and personal projects, with their repositories and live demos.
              </p>
            </div>
            <Link to="/projects">
              <Button variant="cyber" className="gap-2">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden flex flex-col justify-between bg-card hover:-translate-y-1 transition-transform duration-300 group"
              >
                <ProjectImage project={project} />
                <div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span className="text-accent font-bold">PROJECT_0{index + 1}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono text-muted-foreground pt-1">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-mono text-[11px] text-accent block font-semibold mb-1 uppercase tracking-wider">
                        <Code2 className="w-3.5 h-3.5 inline mr-1" />
                        Project Overview
                      </span>
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-[11px]">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="pt-4 flex items-center justify-between font-mono text-xs">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-primary transition-colors font-semibold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" data-scroll-reveal className="py-20 border-t border-border relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="accent" className="font-mono text-xs px-3 py-1">TECH STACK</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Technical Skills</h2>
            <p className="text-muted-foreground text-sm font-mono">
              Tools and technologies I’ve worked with across my projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map(({ category, icon: Icon, skills }) => (
              <Card key={category} className="border-border bg-card/70 hover:border-accent transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded border border-border bg-background flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <CardTitle className="text-base font-mono font-bold text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const SkillIcon = skillIcons[skill] || Code2;
                    return (
                      <Badge key={skill} variant="default" className="gap-1.5 py-1">
                        <SkillIcon className="w-3 h-3 text-accent" />
                        {skill}
                      </Badge>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" data-scroll-reveal className="py-20 border-t border-border bg-card/20 relative z-10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <Badge variant="accent" className="font-mono text-xs px-3 py-1">ACADEMIC BACKGROUND</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Education & Experience</h2>
            <p className="text-muted-foreground text-sm font-mono">
              My education and thesis project; I’m at the beginning of my professional journey.
            </p>
          </div>

          <div className="relative border-l-2 border-accent/40 ml-4 sm:ml-8 space-y-6 pl-6 sm:pl-8">
            <Card className="relative border-border bg-card p-6 sm:p-7">
              <span className="absolute -left-[33px] sm:-left-[41px] top-8 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-primary">Bachelor of Science in Computer Science & Engineering</h3>
                  <p className="text-sm text-accent font-medium">Daffodil International University</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">Sep 2022 – Sep 2026</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                <span>CGPA: <strong className="text-primary">3.49 / 4.00</strong></span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </Card>

            <Card className="relative border-border bg-card p-6 sm:p-7">
              <span className="absolute -left-[33px] sm:-left-[41px] top-8 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-primary">Higher Secondary Certificate (HSC) — Science</h3>
                  <p className="text-sm text-accent font-medium">Milestone College</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">Jun 2019 – Dec 2021</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                <span>GPA: <strong className="text-primary">5.00 / 5.00</strong></span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </Card>
          </div>

          <Card className="mt-8 border-border bg-card p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded border border-accent/40 bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary">Thesis Project: MentorChai</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A virtual mentorship platform developed as my thesis project. See the project card for its features, technology stack, source code, and live demo.
                </p>
                <a
                  href="https://github.com/Mr-Explorer142/MentorChai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  View thesis project
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <PublicationSection />

      <ContactSection />
    </div>
  );
}
