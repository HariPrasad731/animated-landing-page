import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    message:
      "The animations feel incredibly smooth and professional. This landing page structure helped us ship faster with confidence.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Sophia Williams",
    role: "Product Designer",
    message:
      "Clean UI, beautiful motion, and thoughtful interactions. Everything feels intentional and well-crafted.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    message:
      "This setup feels production-ready out of the box. The responsiveness and animations really elevate the experience.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto rotate
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section 
    id="testimonials"
    className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Real feedback from people who worked with us.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-10 shadow-xl text-white bg-gradient-to-br ${testimonials[current].gradient}`}
            >
              <p className="text-lg leading-relaxed text-white/95">
                “{testimonials[current].message}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-white/80">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-6 bg-indigo-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
