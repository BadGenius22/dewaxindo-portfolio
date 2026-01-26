"use client";

import Image from "next/image";
import { ExternalLink, Github, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getFeaturedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  Solidity: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Rust: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  DeFi: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ZK: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Arbitrum: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Solana: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-400 border-purple-500/20",
  Gaming: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  SDK: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Wallet: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Identity: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Yield: "bg-green-500/10 text-green-400 border-green-500/20",
  "Prediction Market": "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A selection of my recent work in DeFi and Web3"
          />
        </AnimatedSection>

        {/* Bento Grid Layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.1 * index}
              className={cn(
                // First project spans 2 columns on large screens
                index === 0 && "lg:col-span-2"
              )}
            >
              <div
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border bg-card",
                  "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
                  "h-full"
                )}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {project.metrics && (
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        {project.metrics}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={cn(
                          "text-xs",
                          tagColors[tag] || "bg-muted text-muted-foreground"
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto pt-4 flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="default" asChild>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3 w-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.docs && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.links.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-3 w-3" />
                          Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
