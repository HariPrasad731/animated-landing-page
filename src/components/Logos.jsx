import { motion } from "framer-motion";

const logos = [
  "/logos/netflix.svg",
  "/logos/meta.svg",
  "/logos/tacobell.svg",
  "/logos/smashingmagazine.svg",
  "/logos/esotericsoftware.svg",
  "/logos/google.svg",
];

export default function Logos() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-sm text-gray-500 mb-12">
          Trusted by teams worldwide
        </p>

        {/* MARQUEE */}
        <div className="logo-marquee">
          <div className="logo-marquee__inner">
            {/* First row */}
            <div className="logo-marquee__row">
              {logos.map((src, i) => (
                <img key={`a-${i}`} src={src} alt="" className="logo-item" />
              ))}
            </div>

            {/* Second row (duplicate) */}
            <div className="logo-marquee__row">
              {logos.map((src, i) => (
                <img key={`b-${i}`} src={src} alt="" className="logo-item" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
