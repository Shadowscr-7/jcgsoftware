import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julio Gómez - Full Stack Developer | 14+ años de experiencia",
  description: "Soy Julio Gómez, desarrollador Full Stack de 34 años con más de 14 años de experiencia en desarrollo web, mobile, automatización e inteligencia artificial",
  keywords: ["Julio Gómez", "desarrollador full stack", "react", "next.js", "inteligencia artificial", "automatización", "marketing digital", "Meta Ads"],
  authors: [{ name: "Julio Gómez" }],
  openGraph: {
    title: "Julio Gómez - Full Stack Developer & IA Specialist",
    description: "34 años • 14+ años transformando ideas en realidad digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
