"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-base text-gray-400 mb-3">Lucknow, IN</p>
      </motion.div>

      <motion.p 
        className="text-lg leading-relaxed text-gray-300 max-w-2xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I&apos;m passionate about building scalable tech solutions with expertise spanning full-stack development, system design, and cloud infrastructure.
      </motion.p>

      {/* Skills/Tech Stack Pills */}
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {['C++', 'JavaScript', 'TypeScript', 'React', 'ReactNative', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Tailwind CSS'].map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero; 