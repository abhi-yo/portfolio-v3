"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hideTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 400);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Show dock on scroll and hide after inactivity
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      // Clear existing timeout
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout to hide dock after 3 seconds
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    // Show dock initially for 3 seconds
    setIsVisible(true);
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Keep dock visible when hovering
  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
    }
    setIsVisible(true);
  };

  // Resume auto-hide when leaving dock
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const apps = [
    {
      id: "projects",
      name: "Finder",
      icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024",
      action: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "github",
      name: "GitHub",
      icon: "https://cdn.jim-nielsen.com/macos/1024/github-desktop-2021-05-20.png?rf=1024",
      action: () => window.open("https://github.com", "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "https://icon.horse/icon/linkedin.com",
      action: () =>
        window.open("https://linkedin.com/in/akshatsingh", "_blank"),
      hideOnMobile: true,
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "https://icon.horse/icon/x.com",
      action: () => window.open("https://twitter.com", "_blank"),
      hideOnMobile: true,
      isMonochrome: true,
    },
    {
      id: "mail",
      name: "Mail",
      icon: "https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024",
      action: () => (window.location.href = "mailto:your.email@example.com"),
    },
  ];

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    return 1;
  };

  const getIconFilter = (
    app: { isMonochrome?: boolean } | undefined,
    index: number,
    scale: number
  ) => {
    const isHovered = hoveredIndex === index;
    const drop = `drop-shadow(0 ${
      scale > 1.1 ? "2px 4px" : "1px 2px"
    } rgba(0,0,0,0.3))`;
    if (isHovered) {
      return `grayscale(0%) saturate(1) contrast(1) brightness(1) ${drop}`;
    }
    if (app?.isMonochrome) {
      // Special handling for monochrome logos (like X) so black becomes a soft gray
      return `invert(1) grayscale(1) brightness(0.7) opacity(0.9) ${drop}`;
    }
    const tone =
      "grayscale(100%) saturate(0) contrast(0.85) brightness(0.85) opacity(0.9)";
    return `${tone} ${drop}`;
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed left-1/2 -translate-x-1/2 z-[1000] bottom-safe"
      style={{ bottom: "max(env(safe-area-inset-bottom, 16px), 16px)" }}
    >
      <motion.div
        className="flex items-end justify-center gap-1.5 sm:gap-2 md:gap-3.5 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1.5 md:py-2 border border-white/20 shadow-2xl mx-2 scale-90 sm:scale-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
        animate={{
          boxShadow: isVisible
            ? "0 16px 40px rgba(0,0,0,0.25)"
            : "0 8px 32px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.5 }}
      >
        {apps.map((app, index) => {
          if (app.hideOnMobile && isMobile) return null;
          const scale = getScale(index);
          return (
            <motion.div
              key={app.id}
              className="flex flex-col items-center justify-end cursor-pointer touch-manipulation"
              style={{ transformOrigin: "bottom center" }}
              whileHover={{
                scale: 1.2,
                y: -6,
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale, y: hoveredIndex === index ? -8 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={app.action}
              title={app.name}
            >
              <motion.img
                src={app.icon}
                alt={app.name}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover"
                style={{
                  filter: getIconFilter(app as any, index, scale),
                  minWidth: "28px",
                  minHeight: "28px",
                  maxWidth: "40px",
                  maxHeight: "40px",
                  transition: "filter 200ms ease",
                }}
                initial={{ y: 0 }}
                animate={{ y: hoveredIndex === index ? -4 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Dock;
