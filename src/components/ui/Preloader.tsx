import { useEffect, useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useNavigationContext } from "../../contexts/navigation.context";
>>>>>>> b6b80fc (fix: preloader ui changes)
import longLogo from "../../images/logo-long.png";

const words = [
  "Design",
  "Develop",
  "Test",
  "Deploy",
  "Monitor",
  "Scale",
=======

const words = [
  "Web",
  "Mobile",
  "Ai",
  "Design",
  "Custom Software",
  "Careers",
  "Community",
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
  "GitFitCode",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
<<<<<<< HEAD
  const [showImage, setShowImage] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
  const { isTablet } = useNavigationContext();
>>>>>>> b6b80fc (fix: preloader ui changes)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (index === words.length - 1) {
      setShowImage(true);
      return;
    }
=======
    if (index === words.length - 1) return;
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

<<<<<<< HEAD
  // Make the bottom part more rounded by increasing curve depth
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 200} 0 ${
    dimension.height
  } L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 50} 0 ${
    dimension.height
  } L0 0`;
=======
 // Make the bottom part more rounded by increasing curve depth
 const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  dimension.height
} Q${dimension.width / 2} ${dimension.height + 200} 0 ${
  dimension.height
} L0 0`;

const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  dimension.height
} Q${dimension.width / 2} ${dimension.height + 50} 0 ${dimension.height} L0 0`;

>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
<<<<<<< HEAD
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 1 },
=======
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
    },
  };

  return (
    <motion.div
      variants={{
        initial: { top: 0 },
        exit: {
          top: "-100vh",
<<<<<<< HEAD
          transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 1 },
=======
          transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
        },
      }}
      initial="initial"
      exit="exit"
<<<<<<< HEAD
<<<<<<< HEAD
      className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[99999] bg-neutral-100 shadow-md"
=======
      className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[99999] bg-white shadow-md"
>>>>>>> b6b80fc (fix: preloader ui changes)
    >
      <div className="z-[99999] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-dot-black/[0.2]"></div> 
      <div className="z-[999999] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div> 
      {dimension.width > 0 && (
        <>
          {!showImage ? (
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
              className={`flex items-center absolute font-black z-10 uppercase text-gray-800 ${
                index === words.length - 1 ? "text-[60px]" : "text-[42px]"
              }`}
            >
              {words[index]}
            </motion.p>
          ) : (
            <motion.img
              src={longLogo} // Replace with your image path
              alt="Preloader Image"
              variants={{
                initial: { opacity: 0 },
                enter: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                },
              }}
              initial="initial"
              animate="enter"
              className="flex items-center absolute z-10 h-[8em] w-auto"
            />
          )}
<<<<<<< HEAD
=======
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
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
          <svg
=======
          {isTablet && (
            <svg
>>>>>>> b6b80fc (fix: preloader ui changes)
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "calc(100% + 300px)",
<<<<<<< HEAD
              // backgroundColor: "transparent",
            }}
            fill="none"
            className=""
          >
            
            {/* SVG Drop Shadow Filter */}
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
             filter="url(#dropShadow)" // Apply shadow effect
              fill={"white"}
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
=======
              backgroundColor: "transparent",
            }}
            fill="none"
          >
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
          </svg>
          )}
        </>
      )}
    </motion.div>
  );
}
