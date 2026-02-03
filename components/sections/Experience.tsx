"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Download } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experiencia <span className="gradient-text">Profesional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de una década construyendo soluciones digitales innovadoras
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          <StaggerContainer className="space-y-12">
            {experiences.map((exp, index) => (
              <StaggerItem key={exp.id}>
                <motion.div
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Content */}
                  <div className="flex-1 w-full">
                    <Card className="p-6 glass border-border hover:border-primary/50 transition-all group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                            <Briefcase className="w-5 h-5" />
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-primary to-secondary text-background">
                            Actual
                          </Badge>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Logros destacados:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg shadow-primary/50"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">14+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500k+</div>
              <div className="text-sm text-muted-foreground">Usuarios Impactados</div>
            </div>
          </div>
        </FadeIn>

        {/* Download CV */}
        <FadeIn delay={0.6}>
          <div className="mt-12 text-center">
            <motion.a
              href="/cv/Julio_Gomez_CV.pdf"
              download="Julio_Gomez_CV.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Descargar CV Completo
              </Button>
            </motion.a>
            <p className="text-sm text-muted-foreground mt-3">
              Curriculum vitae detallado en formato PDF
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
