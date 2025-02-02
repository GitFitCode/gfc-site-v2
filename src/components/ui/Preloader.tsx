"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigationContext } from "../../contexts/navigation.context";
import longLogo from "../../images/logo-long.png";

const words = [
  "Web",
  "Mobile",
  "AI",
  "Design",
  "Software",
  "Careers",
  "Community",
  "GitFitCode",
];

export default function Preloader() {
  const { isTablet } = useNavigationContext();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setShowImage(true);
      return;
    }
    setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
  }, [index]);

  // Make the bottom part more rounded by increasing curve depth
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width /
    2} ${dimension.height + 200} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width /
    2} ${dimension.height + 50} 0 ${dimension.height} L0 0`;

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
      className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[99999] bg-white shadow-md"
    >
      <div className="z-[99999] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-dot-black/[0.2]"></div>
      <div className="z-[999999] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {dimension.width > 0 && (
        <>
          {!showImage ? (
            <motion.p
              variants={{
                initial: { opacity: 0 },
                enter: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
              }}
              initial="initial"
              animate="enter"
              className={`flex items-center absolute font-black z-10 uppercase text-gray-800 ${
                index === words.length - 1 ? "text-[60px]" : "text-[42px]"
              }`}
            >
              {words[index]}
            </motion.p>
          ) : (
            <motion.img
              src={longLogo}
              alt="Preloader Image"
              variants={{
                initial: { opacity: 0 },
                enter: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
              }}
              initial="initial"
              animate="enter"
              className="flex items-center absolute z-10 h-[8em] w-auto"
            />
          )}
          {isTablet && (
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
              <defs>
                <filter
                  id="dropShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="15"
                    floodColor="rgba(0, 0, 0, 0.15)"
                  />
                </filter>
              </defs>
              <motion.path
                filter="url(#dropShadow)"
                fill="white"
                variants={curve}
                initial="initial"
                exit="exit"
              />
            </svg>
          )}
        </>
      )}
    </motion.div>
  );
}
