"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getFeaturedProjects } from "@/lib/data/projects";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { Project } from "@/types";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"] | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories: Array<Project["category"] | "all"> = [
    "all",
    "web",
    "mobile",
    "ai",
    "automation",
    "marketing",
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio & <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones innovadoras que generan impacto real
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-background shadow-lg shadow-primary/50"
                    : "glass border border-border hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "Todos" : PROJECT_CATEGORIES[category]}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card
                  className="p-0 glass border-border hover:border-primary/50 transition-all overflow-hidden group cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50">
                        {project.category === "web" && "🌐"}
                        {project.category === "mobile" && "📱"}
                        {project.category === "ai" && "🤖"}
                        {project.category === "automation" && "⚡"}
                        {project.category === "marketing" && "📊"}
                      </div>
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-background">
                        Destacado
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {project.impact && (
                      <div className="mb-4 p-3 glass rounded-lg border border-primary/20">
                        <p className="text-xs font-semibold text-primary mb-1">Impacto</p>
                        <p className="text-sm">{project.impact}</p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Código
                        </Button>
                      )}
                      {!project.demoUrl && !project.githubUrl && (
                        <Button size="sm" variant="outline" className="flex-1">
                          Ver detalles
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 glass border-b border-border p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold gradient-text">{selectedProject.title}</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-8xl opacity-50">
                      {selectedProject.category === "web" && "🌐"}
                      {selectedProject.category === "mobile" && "📱"}
                      {selectedProject.category === "ai" && "🤖"}
                      {selectedProject.category === "automation" && "⚡"}
                      {selectedProject.category === "marketing" && "📊"}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                    <p className="text-muted-foreground">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Impact */}
                  {selectedProject.impact && (
                    <div className="p-4 glass rounded-lg border border-primary/20">
                      <h3 className="text-lg font-semibold text-primary mb-2">Impacto</h3>
                      <p>{selectedProject.impact}</p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tecnologías Utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <Button
                        className="flex-1"
                        onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Ver Código
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-muted-foreground">Proyectos Totales</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {getFeaturedProjects().length}
              </div>
              <div className="text-sm text-muted-foreground">Destacados</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">$200k+</div>
              <div className="text-sm text-muted-foreground">Valor Generado</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100k+</div>
              <div className="text-sm text-muted-foreground">Usuarios Activos</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
