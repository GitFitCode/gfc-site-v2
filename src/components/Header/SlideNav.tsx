import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { bookButton, nav_items } from "./MainNav";
import FlipLink from "../ui/FlipLink";
import { useNavigationContext } from "../../contexts/navigation.context";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { MagnetIcons } from "../Footer";
import { ShinyBgButton } from "../ui/ShinyBgButton";

export default function index({
  setIsSlideActive,
}: {
  setIsSlideActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { currentNavItem, setCurrentNavItem } =
    useNavigationContext();
  const navigate = useNavigate();
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const handleSelect = useCallback(
    (itemName: string, sectionId: string | null, route: string) => {
      setCurrentNavItem(itemName);

      const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 90;
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - offset,
            behavior: "smooth",
          });
        }
      };

      if (itemName === "Contact") {
        navigate(route);
      } else if (sectionId) {
        if (window.location.pathname === "/") {
          scrollToSection(sectionId);
        } else {
          navigate("/");
          setTimeout(() => scrollToSection(sectionId), 500);
        }
      } else {
        navigate(route);
      }
      setIsSlideActive(false);
    },
    [navigate]
  );

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={
        "z-[900] h-full bg-neutral-800 fixed right-0 top-0 text-neutral-50 shadow-lg"
      }
    >
      <div
        className={
          "box-border w-[100vw] md:w-[400px] h-full p-[20px] flex flex-col z-[900]"
        }
      >
        <div className="flex flex-col gap-[40px] md:gap-[40px] mt-[80px] h-full z-[800]">
          <div
            onMouseLeave={() => {}}
            className={"flex flex-col text-[56px] gap-[18px]"}
          >
            {nav_items.map((item, index) => {
              return (
                <FlipLink
                  key={index}
                  item={item}
                  isActive={currentNavItem === item.name}
                  className={""}
                  fontSize="40px"
                  secondTextColor="text-gfc-accent"
                  handleClick={() =>
                    handleSelect(item.name, item.sectionId, item.route)
                  }
                >
                  {item.content}
                </FlipLink>
              );
            })}
          </div>
          <div className="flex z-[800]">
            <MagnetIcons
              containerClassName=" gap-[10px]"
              iconClassName="h-[30px] w-[30px] hover:fill-[#00c2c6] fill-neutral-400"
            />
          </div>
        </div>
        <ShinyBgButton
          className="py-6 px-8"
          content="Book.Now"
          navItem={bookButton}
          handleClick={() => navigate(bookButton.route)}
        />
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className={
        "absolute top-0 left-[-99px] w-[200px] h-full fill-neutral-800 stroke-none"
      }
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};
