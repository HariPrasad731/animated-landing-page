import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    text: "Clean and scalable component architecture",
    color: "bg-indigo-500",
  },
  {
    text: "Smooth animations using Framer Motion",
    color: "bg-pink-500",
  },
  {
    text: "Mobile-first responsive layouts",
    color: "bg-emerald-500",
  },
  {
    text: "Production-ready UI patterns",
    color: "bg-amber-500",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
    id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Heading */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>

          {/* Color-accent paragraph */}
          <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
            We design and build{" "}
            <span className="text-indigo-600 font-medium">
              animated interfaces
            </span>{" "}
            that feel{" "}
            <span className="text-pink-600 font-medium">
              smooth
            </span>
            ,{" "}
            <span className="text-emerald-600 font-medium">
              intuitive
            </span>
            , and ready for{" "}
            <span className="text-amber-600 font-medium">
              real-world applications
            </span>
            .
          </p>

          {/* Bullet points */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="mt-8 space-y-5"
          >
            {points.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-4 text-gray-700"
              >
                <span
                  className={`mt-2 h-3 w-3 rounded-full ${item.color}`}
                />
                <span className="leading-relaxed">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
              alt="Modern UI design collaboration"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
