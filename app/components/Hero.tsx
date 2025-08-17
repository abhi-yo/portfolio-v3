"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-xs text-gray-500 mb-2">Lucknow, IN</p>
      </motion.div>

      <motion.h1
        className="text-[30px] sm:text-[36px] text-white/85 tracking-[-0.005em] leading-[1.18] max-w-3xl mb-2 font-[520]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Building quiet, fast software.
      </motion.h1>

      <motion.p
        className="text-[13.5px] leading-[1.8] text-gray-300 max-w-xl mb-6 tracking-[0.01em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        Full‑stack engineer focused on web, systems and infra. I care about
        clarity, performance and thoughtful details.
      </motion.p>

      {/* Skills/Tech Stack Pills */}
      <motion.div
        className="flex flex-wrap gap-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {[
          "C++",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Redis",
          "Docker",
          "AWS",
          "Tailwind",
        ].map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-[6px] text-[11px] font-[450] bg-white/5 text-gray-300 rounded-full border border-white/10 tracking-[0.02em]"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
