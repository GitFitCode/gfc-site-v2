// 🔹 Reusable Animated Wrapper for Sections
import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Triggers animation when the section enters viewport
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;