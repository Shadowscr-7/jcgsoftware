"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return { scrollPosition, scrollDirection };
}
