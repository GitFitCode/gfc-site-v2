import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Web",
  "Mobile",
  "Ai",
  "Design",
  "Custom Software",
  "Careers",
  "Community",
  "GitFitCode",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

 // Make the bottom part more rounded by increasing curve depth
 const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  dimension.height
} Q${dimension.width / 2} ${dimension.height + 200} 0 ${
  dimension.height
} L0 0`;

const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  dimension.height
} Q${dimension.width / 2} ${dimension.height + 50} 0 ${dimension.height} L0 0`;


  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={{
        initial: { top: 0 },
        exit: {
          top: "-100vh",
          transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
        },
      }}
      initial="initial"
      exit="exit"
      style={{ backgroundColor: "#00c2c6" }}
      className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[99999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={{
              initial: { opacity: 0 },
              enter: {
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
            initial="initial"
            animate="enter"
            className={`flex items-center absolute font-bold z-10 text-white ${
              index === words.length - 1 ? "text-[60px]" : "text-[42px]"
            }`}
          >
            {words[index]}
          </motion.p>
          <svg
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "calc(100% + 300px)",
              backgroundColor: "transparent",
            }}
            fill="none"
          >
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
