import React, { useCallback, useState, useEffect } from "react";
import Logo from "./logo";
import {
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router";
import { FolderClosedIcon } from "lucide-react";
import FlipLink from "../ui/FlipLink";
import { useNavigationContext } from "../../contexts/navigation.context";
import RoundedMagneticButton from "../ui/RoundedMagneticButton";
import Magnetic from "../ui/Magnetic";
import { NavButton } from "../ui/NavButton";

export interface NavItemType {
  name: string;
  icon?: React.ReactNode;
  route: string;
  sectionId: string | null;
  content: string;
}

export const nav_items: NavItemType[] = [
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
  // Uncomment and adjust if needed:
  // {
  //   name: "Testimonials",
  //   icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />,
  //   route: "#testimonials",
  //   sectionId: "success-stories-section",
  //   content: "Testimonials",
  // },
  {
    name: "Portfolio",
    icon: <FolderClosedIcon className="h-6 w-6" />,
    route: "/",
    sectionId: "portfolio-section",
    content: "Portfolio",
  },
  // {
  //   name: "Contact",
  //   icon: <PhoneIcon className="h-6 w-6" />,
  //   route: "/contact",
  //   sectionId: "contact-section",
  //   content: "Contact",
  // },
];

export const bookButton = {
  name: "Book Now",
  // icon: <PhoneIcon className="h-6 w-6" />,
  route: "/contact",
  sectionId: null,
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
  const [scrolled, setScrolled] = useState(false);
  const { isDesktop, isTablet, currentNavItem, setCurrentNavItem } =
    useNavigationContext();
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom >= 0) {
        const sectionId = section.id;
        const matchingItem = nav_items.find(
          (item) => item.sectionId === sectionId
        );
        if (matchingItem) {
          setCurrentNavItem(matchingItem.name);
          return;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
    [navigate, setCurrentNavItem]
  );

  return (
    <div
      ref={headerRef}
      id="top-header"
      className={`top-0 z-50 transition-all duration-300 relative ${
        scrolled
          ? "bg-white bg-opacity-90 border-b-4 border-gfc-primary-100"
          : "bg-white bg-opacity-100"
      } ${
        isDesktop
          ? "lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:items-center lg:p-4 w-full"
          : "flex flex-row items-center justify-between p-2 w-[97%]"
      }`}
    >
      <div className="flex items-center">
        <Logo setShowNav={() => {}} showNav={showNav} />
      </div>

      {!isTablet ? (
        <RoundedMagneticButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-[1000] relative w-[45px] h-[45px] bg-gfc-accent flex items-center justify-center rounded-md cursor-pointer shadow-lg border border-neutral-400"
        >
          <div
            className={`w-full relative z-10 before:block before:h-[2px] before:w-[40%] before:m-auto before:bg-white before:transition-transform before:duration-300 after:block after:h-[2px] after:w-[40%] after:m-auto after:bg-white after:transition-transform after:duration-300 ${
              isMenuOpen
                ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[0px]"
                : "before:top-[-5px] after:top-[5px]"
            }`}
          ></div>
        </RoundedMagneticButton>
      ) : (
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row space-x-6 relative h-fit">
            {nav_items.map((item, index) => (
              <FlipLink
                key={index}
                item={item}
                isActive={currentNavItem === item.name}
                fontSize="20px"
                secondTextColor="text-gfc-accent"
                className={`${isActive ? "text-gfc-primary-100" : "text-gray-800"}`}
                handleClick={() =>
                  handleSelect(item.name, item.sectionId, item.route)
                }
              >
                {item.content}
              </FlipLink>
            ))}
          </div>
          <NavButton
            linkClassName={`${isActive ? "text-gfc-accent" : "text-gray-50"}`}
            handleClick={() =>
              handleSelect(bookButton.name, bookButton.sectionId, bookButton.route)
            }
            navItem={bookButton}
          />
        </div>
      )}
    </div>
  );
};

export default MainNav;
