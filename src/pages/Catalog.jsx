import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  FolderGit2, 
  ExternalLink, 
  Filter, 
  Terminal,
  Code2,
  Sparkles
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import projectsData from "../data/projects.json";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { profile } from "../data/profile";
import { ProjectImage } from "../components/ProjectImage";

export function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("ALL");

  // Extract all unique tags across projects
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag));
    });
    return ["ALL", ...Array.from(tagsSet)];
  }, []);

  // Filter projects by both search query and selected tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTag =
        selectedTag === "ALL" || project.tags.includes(selectedTag);

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="py-12 sm:py-16 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Action */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors border border-border px-3 py-1.5 rounded bg-card/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&lt; cd ../return_home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-accent">
            <Terminal className="w-4 h-4" />
            <span>PROJECTS · {profile.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Projects
          </h1>

          <p className="text-muted-foreground text-sm font-mono max-w-2xl leading-relaxed">
            Academic and personal projects built with Laravel, React, and related technologies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-lg border border-border bg-card/70 backdrop-blur-md mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search projects or technologies (e.g. Laravel, React, MySQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Results Counter */}
            <div className="font-mono text-xs text-muted-foreground shrink-0 flex items-center gap-2 px-3 py-2 rounded bg-background border border-border">
              <span className="text-accent font-bold">{filteredProjects.length}</span>
              <span>of {projectsData.length} indexed records</span>
            </div>

          </div>

          {/* Tag Filter Pills */}
          <div className="pt-2 border-t border-border/60">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
              <Filter className="w-3.5 h-3.5 text-accent" />
              <span>Filter by Stack Tag:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                    selectedTag === tag
                      ? "bg-accent text-accent-foreground font-bold shadow-glow-subtle"
                      : "bg-background border border-border text-muted-foreground hover:text-primary hover:border-accent/60"
                  }`}
                >
                  {tag === "ALL" ? "* ALL_MODULES" : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Catalog Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-lg bg-card/30 font-mono space-y-3">
            <Terminal className="w-8 h-8 text-muted-foreground mx-auto" />
            <h3 className="text-base text-primary font-semibold">NO_MATCHING_RECORDS_FOUND</h3>
            <p className="text-xs text-muted-foreground">
              No project records match the current filter criteria: "{searchQuery || selectedTag}".
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("ALL");
              }}
              className="mt-2"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="overflow-hidden flex flex-col justify-between bg-card hover:-translate-y-1 transition-transform duration-300 group"
              >
                <ProjectImage project={project} />
                <div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span className="text-accent font-mono font-bold">
                        INDEX_0{idx + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono text-muted-foreground pt-1">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Problem Solved Description */}
                    <div className="text-sm leading-relaxed text-muted-foreground font-sans">
                      <span className="font-mono text-[11px] text-accent block font-semibold mb-1 uppercase tracking-wider">
                        <Code2 className="w-3.5 h-3.5 inline mr-1" />
                        Project Overview
                      </span>
                      {project.description}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-[11px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Footer Links */}
                <CardFooter className="pt-4 flex items-center justify-between font-mono text-xs">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source Code</span>
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
        )}

      </div>
    </div>
  );
}
