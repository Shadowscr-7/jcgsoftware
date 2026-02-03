"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, getSkillsByCategory } from "@/lib/data/skills";
import { SKILL_CATEGORIES } from "@/lib/constants";
import type { Skill } from "@/types";

const categoryColors = {
  frontend: "from-primary to-cyan-400",
  backend: "from-secondary to-purple-400",
  mobile: "from-accent to-pink-400",
  database: "from-[#00FF88] to-green-400",
  devops: "from-[#FFD93D] to-yellow-400",
  ai: "from-primary to-secondary",
  marketing: "from-accent to-orange-400",
  other: "from-purple-400 to-pink-400",
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Skill["category"] | "all">("all");

  const filteredSkills =
    selectedCategory === "all" ? skills : getSkillsByCategory(selectedCategory);

  const categories: Array<Skill["category"] | "all"> = [
    "all",
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
    "ai",
    "marketing",
    "other",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Habilidades & <span className="gradient-text">Tecnologías</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stack tecnológico completo con dominio en múltiples áreas
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
                {category === "all" ? "Todas" : SKILL_CATEGORIES[category]}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer 
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <StaggerItem key={`${skill.name}-${index}`}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 glass border-border hover:border-primary/50 transition-all h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {skill.yearsOfExperience}+ años
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Nivel de dominio</span>
                      <span className="font-semibold text-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      {SKILL_CATEGORIES[skill.category]}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Skills Summary */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">60+</div>
              <div className="text-sm text-muted-foreground">Tecnologías</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">8</div>
              <div className="text-sm text-muted-foreground">Categorías</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Nivel Promedio</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">14+</div>
              <div className="text-sm text-muted-foreground">Años Aprendiendo</div>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Buscas un desarrollador versátil y experimentado?
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conversemos sobre tu proyecto
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
