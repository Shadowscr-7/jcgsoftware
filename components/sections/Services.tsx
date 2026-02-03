"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Zap, Megaphone, Wrench, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Zap,
  Megaphone,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Servicios <span className="gradient-text">Profesionales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones tecnológicas completas adaptadas a tus necesidades
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="p-8 glass border-border hover:border-primary/50 transition-all h-full flex flex-col group">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Optional: Add a subtle footer/badge */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground text-center font-medium">
                        14+ años de experiencia
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Why Choose Me */}
        <FadeIn delay={0.4}>
          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-center mb-8">
              ¿Por qué trabajar <span className="gradient-text">conmigo?</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Entrega Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  Metodología ágil para resultados rápidos
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Calidad Premium</h4>
                <p className="text-sm text-muted-foreground">
                  Código limpio y best practices
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-semibold mb-2">Comunicación Clara</h4>
                <p className="text-sm text-muted-foreground">
                  Updates constantes y transparencia
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Soporte Continuo</h4>
                <p className="text-sm text-muted-foreground">
                  Mantenimiento y actualizaciones
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Process */}
        <FadeIn delay={0.6}>
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Mi <span className="gradient-text">Proceso</span> de Trabajo
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Descubrimiento", desc: "Entendemos tus necesidades y objetivos" },
                { step: "02", title: "Planificación", desc: "Diseñamos la solución y arquitectura" },
                { step: "03", title: "Desarrollo", desc: "Construimos con las mejores prácticas" },
                { step: "04", title: "Entrega", desc: "Deploy, testing y documentación completa" },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="glass p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                    <div className="text-5xl font-bold gradient-text mb-3">{phase.step}</div>
                    <h4 className="font-semibold text-lg mb-2">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
                Hablemos de tu Proyecto
              </Button>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
