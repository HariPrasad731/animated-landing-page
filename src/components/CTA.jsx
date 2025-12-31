import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section
        id="signup"
        className="relative py-32 overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Ready to Build Something Amazing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-white/90"
          >
            Join teams creating modern, animated, and production-ready web
            experiences.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-80 px-5 py-3 rounded-full text-gray-900 focus:outline-none"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </motion.form>

          {/* Feedback Messages */}
          <AnimatePresence>
            {status && (
              <motion.p
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-4 ${
                  status === "success"
                    ? "text-green-200"
                    : "text-red-200"
                }`}
              >
                {status === "success"
                  ? "Thanks for subscribing!"
                  : "Please enter a valid email address."}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= ENHANCED FOOTER ================= */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 text-gray-400"
      >
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">
              AnimatedUI
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Crafting smooth, modern, and production-ready animated
              interfaces using React and Framer Motion.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Showcase</a></li>
              <li><a href="#steps" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {new Date().getFullYear()} Animated Landing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
