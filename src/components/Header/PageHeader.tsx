import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedMagneticButton from "../ui/RoundedMagneticButton";
import { useNavigationContext } from "../../contexts/navigation.context";
import MainNav from "./MainNav";
import SlideNav from "./SlideNav";
import { set } from "lodash";

export default function Index() {
  const header = useRef(null);
  const button = useRef(null);
  const [isSlideActive, setIsSlideActive] = useState(false);
  const { currentNavItem } = useNavigationContext();

  useEffect(() => {
    setIsSlideActive(false);
  }, [currentNavItem]);

  useLayoutEffect(() => {
    if (!button.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: header.current,
        start: "top top", // When the header is at the top of the viewport
        end: "bottom top", // When the bottom of the header reaches the top
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsSlideActive(false);
        },
      },
    });
  }, []);

  return (
    <>
      {/* Header Section */}
      <MainNav
        headerRef={header}
        isMenuOpen={isSlideActive}
        setIsMenuOpen={setIsSlideActive}
      />

      {/* Header Button */}
      <div
        ref={button}
        className="fixed right-0 z-[1000] transform scale-0 md:max-w-7xl"
      >
        <RoundedMagneticButton
          onClick={() => setIsSlideActive(!isSlideActive)}
          className="relative z-[1000] top-[-40px]  mr-[20px] w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-neutral-700 flex items-center justify-center rounded-full cursor-pointer shadow-lg border-1 border-neutral-400"
        >
          <div
            className={`w-full relative z-10 before:block before:h-[2px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:duration-300 after:block after:h-[2px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
              isSlideActive
                ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[0px]"
                : "before:top-[-5px] after:top-[5px]"
            }`}
          ></div>
        </RoundedMagneticButton>
      </div>

      {/* Nav Menu */}
      <AnimatePresence mode="wait">{isSlideActive && <SlideNav setIsSlideActive={setIsSlideActive} />}</AnimatePresence>
    </>
  );
}
