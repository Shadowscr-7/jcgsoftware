"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Zap, Megaphone, Wrench, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Zap,
  Megaphone,
  Wrench,
};

export function Services() {
  const { language } = useLanguage();

  // Service data from translations
  const services = [
    { id: "1", icon: "Code2", serviceKey: "service1" },
    { id: "2", icon: "Smartphone", serviceKey: "service2" },
    { id: "3", icon: "Brain", serviceKey: "service3" },
    { id: "4", icon: "Zap", serviceKey: "service4" },
    { id: "5", icon: "Megaphone", serviceKey: "service5" },
    { id: "6", icon: "Wrench", serviceKey: "service6" },
  ];

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
              {getTranslation(language, "services.title").split(" ")[0]} <span className="gradient-text">{getTranslation(language, "services.title").split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getTranslation(language, "services.subtitle")}
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const serviceData = getTranslation(language, `services.${service.serviceKey}`);
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
                      {serviceData.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {serviceData.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {serviceData.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Optional: Add a subtle footer/badge */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground text-center font-medium">
                        {getTranslation(language, "servicesExtra.experienceYears")}
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
              {getTranslation(language, "servicesExtra.whyWorkWithMe.title")} <span className="gradient-text">{getTranslation(language, "servicesExtra.whyWorkWithMe.titleHighlight")}</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["speed", "quality", "communication", "support"].map((key) => {
                const reason = getTranslation(language, `servicesExtra.whyWorkWithMe.reasons.${key}`);
                return (
                  <div key={key} className="text-center">
                    <div className="text-4xl mb-3">{reason.emoji}</div>
                    <h4 className="font-semibold mb-2">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Process */}
        <FadeIn delay={0.6}>
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              {getTranslation(language, "servicesExtra.process.title")} <span className="gradient-text">{getTranslation(language, "servicesExtra.process.titleHighlight")}</span> {getTranslation(language, "servicesExtra.process.titleSuffix")}
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {getTranslation(language, "servicesExtra.process.phases").map((phase: any, index: number) => (
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
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
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
              {getTranslation(language, "servicesExtra.cta.question")}
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
                {getTranslation(language, "servicesExtra.cta.button")}
              </Button>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
