import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTNad22tGOotC40W9Vmz1LuNjTWQdLz6sKA&s",
  "https://s.yimg.com/ny/api/res/1.2/K7JJZwb9PYk3fInskXcvYA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/thewrap.com/59a190c62e96154e27162f2a4de7a9cc",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiV2l3c84PgBkE8OTdG-6jyNW9kdU69Ke8g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosYHCBOwOIkMdhcrgEj5Eh6fp5-if1hQqWQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82WfE9DkZTsyY1JRp3jal_ReKyqmZVx46wQ&s",
  "data:image/png;base64,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",
];


export default function Gallery() {
  const sectionRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  // ✅ Parallax tied to scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section 
    id="gallery"
    ref={sectionRef} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Product Showcase
          </h2>
          <p className="mt-4 text-gray-600">
            A glimpse of beautifully crafted interfaces, thoughtful design,
            and real-world development workflows.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setActiveImage(src)}
            >
              <motion.img
                src={src}
                alt="Tech showcase"
                className="h-72 w-full object-cover"
                style={{ y }} // ✅ parallax without breaking
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm tracking-wide">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Expanded tech preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
