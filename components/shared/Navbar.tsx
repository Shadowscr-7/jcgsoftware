"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const [activeSection, setActiveSection] = useState("hero");
  const { language, setLanguage } = useLanguage();

  const isScrolled = scrollPosition > 50;

  // Get navigation links from translations
  const NAV_LINKS = [
    { href: "#hero", label: getTranslation(language, "nav.home") },
    { href: "#about", label: getTranslation(language, "nav.about") },
    { href: "#experience", label: getTranslation(language, "nav.experience") },
    { href: "#skills", label: getTranslation(language, "nav.skills") },
    { href: "#portfolio", label: getTranslation(language, "nav.portfolio") },
    { href: "#services", label: getTranslation(language, "nav.services") },
    { href: "#contact", label: getTranslation(language, "nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Mejorado */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Logo Image */}
              <div className="relative flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={140}
                  height={140}
                  className="relative z-10 w-35 h-auto"
                  priority
                />
                
                {/* Animated cursor */}
                <motion.div
                  className="w-0.5 h-8 bg-primary"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              
              {/* Underline animation */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <motion.div 
              className="flex items-center glass rounded-lg border border-border/50 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  language === "es"
                    ? "bg-primary text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
              <div className="w-px h-4 bg-border/50" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${
                  language === "en"
                    ? "bg-primary text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Button */}
                <div className="relative px-6 py-2.5 bg-linear-to-r from-primary to-secondary text-background font-semibold rounded-lg overflow-hidden">
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{getTranslation(language, "nav.contact")}</span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Mobile Menu Button Mejorado */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <motion.div 
              className="flex items-center glass rounded-lg border border-border/50 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 text-xs font-medium transition-all ${
                  language === "es"
                    ? "bg-primary text-background"
                    : "text-muted-foreground"
                }`}
              >
                ES
              </button>
              <div className="w-px h-3 bg-border/50" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-xs font-medium transition-all ${
                  language === "en"
                    ? "bg-primary text-background"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </motion.div>

            <motion.button
              className="p-2 glass rounded-lg border border-border hover:border-primary/50 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="block px-4 py-3 bg-linear-to-r from-primary to-secondary text-center text-background font-semibold rounded-lg cursor-pointer"
            >
              {getTranslation(language, "nav.contact")}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
