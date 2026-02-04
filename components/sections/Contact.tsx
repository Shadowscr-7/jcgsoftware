"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío (reemplazar con tu API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {getTranslation(language, "contact.title").split(" ")[0]} <span className="gradient-text">{getTranslation(language, "contact.title").split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getTranslation(language, "contact.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{getTranslation(language, "contact.infoTitle")}</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <motion.a
                    href="mailto:jcg.software.solution@gmail.com"
                    className="flex items-center gap-4 glass p-4 rounded-lg hover:border-primary/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">jcg.software.solution@gmail.com</div>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+59897479212"
                    className="flex items-center gap-4 glass p-4 rounded-lg hover:border-primary/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{getTranslation(language, "contact.phone")}</div>
                      <div className="text-sm text-muted-foreground">+598 97479212</div>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 glass p-4 rounded-lg"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{getTranslation(language, "contact.location")}</div>
                      <div className="text-sm text-muted-foreground">Remote / Worldwide</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Availability */}
              <div className="glass p-6 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse" />
                  {getTranslation(language, "contact.availability")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {getTranslation(language, "contact.availabilityText")}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.4}>
            <Card className="p-8 glass border-border">
              <h3 className="text-2xl font-bold mb-6">{getTranslation(language, "contact.formTitle")}</h3>
              
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg text-[#00FF88]"
                >
                  {getTranslation(language, "contact.success")}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive"
                >
                  {getTranslation(language, "contact.error")}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{getTranslation(language, "contact.form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={getTranslation(language, "contact.form.namePlaceholder")}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{getTranslation(language, "contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={getTranslation(language, "contact.form.emailPlaceholder")}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">{getTranslation(language, "contact.form.subject")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={getTranslation(language, "contact.form.subjectPlaceholder")}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{getTranslation(language, "contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={getTranslation(language, "contact.form.messagePlaceholder")}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-background border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      {getTranslation(language, "contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {getTranslation(language, "contact.form.send")}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
