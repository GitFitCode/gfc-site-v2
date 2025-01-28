// 🔹 Reusable Animated Wrapper for Sections
import { ReactNode } from "react";
import { motion } from "framer-motion";

<<<<<<< HEAD
<<<<<<< HEAD
const AnimatedSection = ({ children, className }: { children: ReactNode, className?: string }) => {
=======
const AnimatedSection = ({ children }: { children: ReactNode }) => {
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
const AnimatedSection = ({ children, className }: { children: ReactNode, className?: string }) => {
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Triggers animation when the section enters viewport
<<<<<<< HEAD
<<<<<<< HEAD
      className={className}
=======
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
      className={className}
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;