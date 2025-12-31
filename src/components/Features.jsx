import { motion } from "framer-motion";

const features = [
  {
    title: "Clean Architecture",
    description:
      "Well-structured and scalable components designed for long-term maintainability.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Smooth Animations",
    description:
      "Premium motion effects built using Framer Motion for a fluid user experience.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first layouts that adapt seamlessly across all screen sizes.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Reusable Components",
    description:
      "Components crafted to be reused across landing pages, dashboards, and apps.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Performance Focused",
    description:
      "Optimized animations and layouts without unnecessary re-renders.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Production Ready",
    description:
      "Built with real-world patterns and ready to ship or extend further.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section 
    id="features"
    className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to build modern, animated, and responsive
            interfaces.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group rounded-2xl bg-gray-50 p-8 shadow-md hover:shadow-xl transition"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition pointer-events-none`}
              />

              {/* Gradient Accent Bar */}
              <div
                className={`h-1 w-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6`}
              />

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
