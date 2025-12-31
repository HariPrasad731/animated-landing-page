import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Plan",
    description:
      "Understand requirements, define scope, and create a clear execution plan.",
    gradient: "from-indigo-500 to-purple-500",
    dot: "bg-indigo-500",
  },
  {
    title: "Design",
    description:
      "Craft clean, responsive UI with animation-first thinking.",
    gradient: "from-pink-500 to-rose-500",
    dot: "bg-pink-500",
  },
  {
    title: "Develop",
    description:
      "Build scalable React components with smooth Framer Motion animations.",
    gradient: "from-emerald-500 to-teal-500",
    dot: "bg-emerald-500",
  },
  {
    title: "Launch",
    description:
      "Test, optimize, and ship a production-ready experience.",
    gradient: "from-orange-500 to-amber-500",
    dot: "bg-orange-500",
  },
];

export default function Steps() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
    id="steps"
      ref={ref}
      className="relative py-32 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600">
            A simple, proven process to deliver high-quality results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-indigo-500 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-28">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-1/2 px-6">
                    <div
                      className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${step.gradient}
                        transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                    >
                      <span className="text-sm font-semibold opacity-90">
                        Step {index + 1}
                      </span>
                      <h3 className="mt-2 text-xl font-bold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-white/90">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <span
                    className={`absolute left-1/2 top-8 h-4 w-4 rounded-full ${step.dot} -translate-x-1/2 shadow-lg`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
