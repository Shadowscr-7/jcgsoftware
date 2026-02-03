"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Smartphone, Brain, Megaphone, Wrench, Zap } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";

const expertise = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description: "Frontend y Backend con las últimas tecnologías",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Mobile",
    description: "Aplicaciones nativas e híbridas iOS/Android",
    color: "text-secondary",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementación y desarrollo de soluciones IA",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Agentes y procesos automatizados",
    color: "text-[#00FF88]",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Meta Ads y estrategias publicitarias",
    color: "text-[#FFD93D]",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Consultoría y armado de infraestructura",
    color: "text-primary",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soy Julio Gómez, desarrollador apasionado de 34 años con más de 14 años de experiencia creando soluciones digitales innovadoras
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Transformando ideas en <span className="gradient-text">realidad digital</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Con más de una década de experiencia en el desarrollo de software, he trabajado en proyectos 
                de diversa complejidad, desde aplicaciones web y mobile hasta sistemas de automatización 
                con inteligencia artificial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi enfoque se centra en crear soluciones escalables, eficientes y con un diseño excepcional. 
                Me especializo en tecnologías modernas tanto del frontend como del backend, siempre buscando 
                las mejores prácticas y las herramientas más innovadoras.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Además del desarrollo, tengo experiencia en automatización de procesos, implementación de 
                soluciones de IA, y estrategias de marketing digital con herramientas profesionales de Meta.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass px-6 py-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">14+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
                <div className="glass px-6 py-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">Proyectos completados</div>
                </div>
                <div className="glass px-6 py-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left">
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 glass rounded-2xl border border-primary/20 overflow-hidden">
                {/* Gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
                
                <Image
                  src="/profile.jpg"
                  alt="Foto profesional"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Expertise Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 glass border-border hover:border-primary/50 transition-all h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
