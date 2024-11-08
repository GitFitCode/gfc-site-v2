import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationContext } from '../../contexts/navigation.context';
import '../../App.css';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isNavigating } = useNavigationContext();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when `isNavigating` becomes `false`
    if (!isNavigating) {
      const delayTimer = setTimeout(() => setShouldAnimate(true), 100); // Add a delay if needed
      return () => clearTimeout(delayTimer);
    } else {
      setShouldAnimate(false); // Reset if navigating
    }
  }, [isNavigating]);

  // const transitionVariants = {
  //   hidden: { opacity: 0, scale: 1 },
  //   visible: { opacity: 1, scale: 1 },
  //   exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5, delay: 1 }  },
  // };
  const transitionVariants = {
    initial: { opacity: 1 },         // Component is fully visible on mount
    enter: { opacity: 1, scale: 1 }, // Animation on component entry
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }, // Fade-out effect
  };

  return (
    <AnimatePresence mode="wait">
      {shouldAnimate && (
        <motion.div
          variants={transitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '100%',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
