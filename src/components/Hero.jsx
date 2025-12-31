import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Hero() {
  const sectionRef = useRef(null);

  // 🔹 Subtle parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="home"                // ✅ added for header navigation
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
          alt="Developer working on code"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
            >
              Build Pages with Animation
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="mt-6 text-lg text-white/90 max-w-xl"
            >
              Smooth animations, clean UI, and production-ready React components
              for modern web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="mt-10 flex gap-4 flex-wrap"
            >
              {/* Gradient CTA */}
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        ↓
      </motion.div>
    </section>
  );
}
