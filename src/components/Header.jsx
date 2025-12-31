import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold text-indigo-600 tracking-tight"
        >
          AnimatedUI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            About
          </a>
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#steps" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            Process
          </a>
          <a href="#gallery" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            Showcase
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
            Testimonials
          </a>
        </nav>

        {/* Sign Up CTA */}
        <a
          href="#signup"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-600 transition"
        >
          Sign Up
        </a>
      </div>
    </motion.header>
  );
}
