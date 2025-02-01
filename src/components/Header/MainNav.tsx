<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Logo from './logo';
import { HomeIcon, UserGroupIcon, CogIcon, PhoneIcon } from '@heroicons/react/24/solid';
=======
=======
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
import Logo from './Logo';
import { HomeIcon, UserGroupIcon, CogIcon, ChatBubbleOvalLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';
>>>>>>> 7580afc (chore: added sticky footer and initial site loader)
import { Link, useNavigate } from 'react-router';
import { FolderClosedIcon } from 'lucide-react';
=======
=======
>>>>>>> 8917532 (chore: navigation redesign)
import Logo from "./Logo";
=======
import Logo from "./logo";
>>>>>>> 1f4c9de (chore: made minor fixes to nav routing)
import {
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { FolderClosedIcon } from "lucide-react";
import FlipLink from "../ui/FlipLink";
import { useNavigationContext } from "../../contexts/navigation.context";
import RoundedMagneticButton from "../ui/RoundedMagneticButton";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Magnetic from "../ui/Magnetic";
>>>>>>> c793c6f (chore: navigation redesign)
=======
=======
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
import { NavButton } from "../ui/NavButton";

export interface NavItemType {
  name: string;
  icon?: React.ReactNode;
  route: string;
  sectionId: string | null;
  content: string;
}
<<<<<<< HEAD
>>>>>>> 4979765 (chore: create template buttons and modified navigation)

=======
import Magnetic from "../ui/Magnetic";
=======
>>>>>>> a49a46a (chore: create template buttons and modified navigation)

>>>>>>> 8917532 (chore: navigation redesign)
export const nav_items = [
  {
    name: "Home",
    icon: <HomeIcon className="h-6 w-6" />,
    route: "/",
    sectionId: "gfc-intro-section",
    content: "Home",
  },
  {
    name: "About",
    icon: <UserGroupIcon className="h-6 w-6" />,
    route: "/",
    sectionId: "intro-section",
    content: "About",
  },
  {
    name: "Services",
    icon: <CogIcon className="h-6 w-6" />,
    route: "/",
    sectionId: "solutions-section",
    content: "Services",
  },
  // { name: 'Testimonials', icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />, route: '#testimonials', sectionId: 'success-stories-section', content: 'Testimonials' },
  {
    name: "Portfolio",
    icon: <FolderClosedIcon className="h-6 w-6" />,
    route: "/",
    sectionId: 'portfolio-section',
    content: "Portfolio",
  },
  // {
  //   name: "Contact",
  //   icon: <PhoneIcon className="h-6 w-6" />,
  //   route: "/contact",
  //   sectionId: 'contact-section',
  //   content: "Contact",
  // },
];

<<<<<<< HEAD
<<<<<<< HEAD
export const bookButton = {
  name: "Book Now",
<<<<<<< HEAD
=======
const bookButton = {
  name: "Book",
>>>>>>> 8917532 (chore: navigation redesign)
=======
export const bookButton = {
  name: "Book Now",
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
  // icon: <PhoneIcon className="h-6 w-6" />,
  route: "/booking",
  sectionId: null,
=======
  route: "/contact",
  sectionId: 'contact-section',
>>>>>>> 1f4c9de (chore: made minor fixes to nav routing)
  content: "Launch",
};

const MainNav = ({
  headerRef,
  isMenuOpen,
  setIsMenuOpen,
}: {
  headerRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { isDesktop, isTablet, currentNavItem, setCurrentNavItem } =
    useNavigationContext();
  // const [selected, setSelected] = useState(nav_items[0].name);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    // Update scrolled state for opcacity and shadow effect for nav
    setScrolled(window.scrollY > 50);
    // Find the section that is currently in view and update the selected state
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom >= 0) {
        // Correct condition
        const sectionId = section.id;
        const matchingItem = nav_items.find(
          (item) => item.sectionId === sectionId
        );
        if (matchingItem) {
          setCurrentNavItem(matchingItem.name); // Update selected state
          return; // Exit the loop once a match is found
        }
      }
    }
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    handleScroll,
  ]); // Empty dependency array to run only once on mount

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

      if (sectionId) {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 500);
      } else {
        navigate(route);
      }
    },
    [navigate]
  );

  return (
    <div
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8917532 (chore: navigation redesign)
      ref={headerRef}
      className={`top-0 z-1000 transition-all duration-300 relative ${
        scrolled
          ? "bg-white bg-opacity-90 border-b-4 border-gfc-primary-100"
          : "bg-white bg-opacity-100"
      } ${
        isDesktop
          ? "lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:items-center lg:p-4 w-full"
          : "flex flex-row items-center justify-between p-2 w-[97%]"
      }`}
<<<<<<< HEAD
=======
      className={` top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 border-b-4 border-gfc-primary-100' : 'bg-white bg-opacity-100'
        } ${isDesktop ? 'lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:items-center lg:p-4 w-full' : 'flex flex-row items-center justify-between p-2 w-[97%]'}`}
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
>>>>>>> 8917532 (chore: navigation redesign)
    >
      <div className="flex items-center">
        <Logo setShowNav={() => {}} showNav={showNav} />
      </div>

      {!isTablet ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-[40px] h-[40px] bg-neutral-800 flex items-center justify-center rounded-md cursor-pointer">
        //   <div
        //     className={`w-full relative z-10 before:block before:h-[2px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:duration-300 after:block after:h-[2px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
        //       isMenuOpen ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[0px]" : "before:top-[-5px] after:top-[5px]"
        //     }`}
        //   ></div>
        // </div>
>>>>>>> 8917532 (chore: navigation redesign)
=======
>>>>>>> f1d5d1b (fix: minor nav code fixes)
        <RoundedMagneticButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-[1000] relative w-[45px] h-[45px] bg-gfc-accent flex items-center justify-center rounded-md cursor-pointer shadow-lg border-1 border-neutral-400"
        >
          <div
            className={`w-full relative z-10 before:block before:h-[2px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:duration-300 after:block after:h-[2px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
              isMenuOpen
                ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[0px]"
                : "before:top-[-5px] after:top-[5px]"
            }`}
          ></div>
        </RoundedMagneticButton>
      ) : (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="flex flex-row items-center gap-8">
          <div className={`flex flex-row space-x-6 relative h-fit`}>
=======
        <div className="flex flex-row items-center gap-4">
          <div className={`flex flex-row space-x-4 relative h-fit`}>
>>>>>>> 8917532 (chore: navigation redesign)
=======
        <div className="flex flex-row items-center gap-8">
          <div className={`flex flex-row space-x-6 relative h-fit`}>
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
            {nav_items.map((item, index) => (
              <FlipLink
                key={index}
                item={item}
                isActive={currentNavItem === item.name}
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize="20px"
=======
                fontSize="18px"
>>>>>>> 8917532 (chore: navigation redesign)
=======
                fontSize="20px"
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
                secondTextColor="text-gfc-accent"
                className={`${
                  isActive ? "text-gfc-primary-100" : "text-gray-800"
                }`}
                handleClick={() =>
                  handleSelect(item.name, item.sectionId, item.route)
                }
              >
                {item.content}
              </FlipLink>
            ))}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
          <NavButton 
          linkClassName={`${isActive ? "text-gfc-accent" : "text-neutral-50"}`} 
          handleClick={() =>
            handleSelect(
              bookButton.name,
              bookButton.sectionId,
              bookButton.route
            )}
            navItem={bookButton} />
<<<<<<< HEAD
=======
          <Magnetic>
            <div className="py-3 px-4 bg-gfc-primary hover:bg-neutral-700 rounded-md shadow-sm cursor-pointer">
=======
          {/* <Magnetic>
            <div className="py-3 px-6 bg-neutral-700 hover:bg-gfc-primary rounded-md shadow-sm cursor-pointer">
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
              <FlipLink
                item={bookButton}
                isActive={false}
                fontSize="20px"
                secondTextColor="text-neutral-50"
                className={`${
                  isActive ? "text-gfc-accent" : "text-neutral-50"
                }  `}
                handleClick={() =>
                  handleSelect(
                    bookButton.name,
                    bookButton.sectionId,
                    bookButton.route
                  )
                }
              >
                {bookButton.content}
              </FlipLink>
            </div>
<<<<<<< HEAD
          </Magnetic>
>>>>>>> 8917532 (chore: navigation redesign)
=======
          </Magnetic> */}
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
=======
          <NavButton
            linkClassName={`${
              isActive ? "text-gfc-accent" : "text-gray-50"
            }`}
            handleClick={() =>
              handleSelect(
                bookButton.name,
                bookButton.sectionId,
                bookButton.route
              )
            }
            navItem={bookButton}
          />
>>>>>>> 099a1fb (fix: navigation ui changes)
        </div>
      )}
    </div>
  );
};

export default MainNav;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 8917532 (chore: navigation redesign)
=======

>>>>>>> a49a46a (chore: create template buttons and modified navigation)
=======
>>>>>>> 099a1fb (fix: navigation ui changes)
