"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="relative w-32 h-32 mx-auto">
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-60 animate-pulse" />
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-full glass border-2 border-primary/50 p-1 overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Foto profesional"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-foreground">Julio Gómez</span>
              <br />
              <span className="gradient-text">{getTranslation(language, "hero.role")}</span>
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {getTranslation(language, "hero.description")}
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 glass rounded-full text-sm font-medium border border-primary/30 text-primary">
                {getTranslation(language, "hero.badge1")}
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm font-medium border border-secondary/30 text-secondary">
                {getTranslation(language, "hero.badge2")}
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm font-medium border border-accent/30 text-accent">
                {getTranslation(language, "hero.badge3")}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all"
                onClick={() => scrollToSection("#portfolio")}
              >
                {getTranslation(language, "hero.cta1")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection("#contact")}
              >
                {getTranslation(language, "hero.cta2")}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:tuemail@ejemplo.com"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
              </motion.a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("#about")}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
