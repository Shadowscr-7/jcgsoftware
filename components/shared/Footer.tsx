"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();

  const NAV_LINKS = [
    { href: "#hero", label: getTranslation(language, "nav.home") },
    { href: "#about", label: getTranslation(language, "nav.about") },
    { href: "#experience", label: getTranslation(language, "nav.experience") },
    { href: "#skills", label: getTranslation(language, "nav.skills") },
    { href: "#portfolio", label: getTranslation(language, "nav.portfolio") },
    { href: "#services", label: getTranslation(language, "nav.services") },
    { href: "#contact", label: getTranslation(language, "nav.contact") },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">{getTranslation(language, "footer.brand")}</h3>
              <p className="text-sm text-muted-foreground">
                {getTranslation(language, "footer.description")}
              </p>
              <div className="flex gap-4">
                {[
                  { icon: "github", href: "https://github.com/tuusuario" },
                  { icon: "linkedin", href: "https://linkedin.com/in/tuusuario" },
                  { icon: "twitter", href: "https://twitter.com/tuusuario" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-primary/50 transition-all text-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon === "github" && "GH"}
                    {social.icon === "linkedin" && "LI"}
                    {social.icon === "twitter" && "TW"}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">{getTranslation(language, "footer.navigation")}</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">{getTranslation(language, "footer.services")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{getTranslation(language, "footer.servicesLinks.web")}</li>
                <li>{getTranslation(language, "footer.servicesLinks.mobile")}</li>
                <li>{getTranslation(language, "footer.servicesLinks.ai")}</li>
                <li>{getTranslation(language, "footer.servicesLinks.automation")}</li>
                <li>{getTranslation(language, "footer.servicesLinks.marketing")}</li>
                <li>{getTranslation(language, "footer.servicesLinks.consulting")}</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{getTranslation(language, "footer.contact")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:tuemail@ejemplo.com" className="hover:text-primary transition-colors">
                    tuemail@ejemplo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>Remote / Worldwide</li>
                <li className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[#00FF88]">
                    <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
                    {getTranslation(language, "footer.availability")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Portfolio. {getTranslation(language, "footer.madeWith")}{" "}
              <Heart className="inline w-4 h-4 text-accent" /> {getTranslation(language, "footer.using")}
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                {getTranslation(language, "footer.privacy")}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {getTranslation(language, "footer.terms")}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {getTranslation(language, "footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center border border-primary/50 hover:bg-primary/10 transition-all z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </motion.button>
    </footer>
  );
}
