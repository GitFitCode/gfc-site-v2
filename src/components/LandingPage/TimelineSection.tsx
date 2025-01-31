"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Natura Labs
import natura_hero from "../../images/portfolio/natura_labs/hero.png";
import phones from "../../images/portfolio/natura_labs/phones.png";
import screens from "../../images/portfolio/natura_labs/screens.png";
import desktop_screens from "../../images/portfolio/natura_labs/desktop-screens.png";
// Mode Earn Club
import mode_hero from "../../images/portfolio/mode_earn_club/hero.png";
import screens_three from "../../images/portfolio/mode_earn_club/screens-three.png";
import screens_four from "../../images/portfolio/mode_earn_club/screens-four.png";
import screens_five from "../../images/portfolio/mode_earn_club/screens-five.png";
// ConnectworX
import connect_hero from "../../images/portfolio/connectworx/hero.png";
import networking_features from "../../images/portfolio/connectworx/networking-features.png";
import keynote_features from "../../images/portfolio/connectworx/keynote-features.png";
import studio_features from "../../images/portfolio/connectworx/studio-features.png";
import { Link } from "react-router";

export const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  // State to hold the random rotation value
  const [randomRotation, setRandomRotation] = useState(0);
  // Function to generate a new random rotation between -5 and +5
  const handleHoverStart = () => {
    const rotation = Math.floor(Math.random() * 11) - 5; // -5..+5 (inclusive)
    setRandomRotation(rotation);
  };

  const data = [
    {
      title: "Natura Labs",
      content: (
        <motion.div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-8">
            A growth intelligence firm specializing in scaling high-performance
            brands through data-driven strategies and creative solutions. They
            focus on optimizing platforms like Google and Facebook to enhance
            user acquisition and profitability.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link to={"/portfolio/natura-labs"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={natura_hero}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>

            <Link to={"/portfolio/natura-labs"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={phones}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/natura-labs"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={screens}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/natura-labs"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={desktop_screens}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Mode Earn Club",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-8">
            A premium subscription service offered by Mode Mobile, designed to
            enhance users' earning potential through the Mode Earn App.
            Subscribers benefit from accelerated earning rates—ranging from 50%
            to 100% faster—when engaging in activities like playing games,
            reading news, and taking surveys
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link to={"/portfolio/mode-earn-club"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={mode_hero}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/mode-earn-club"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={screens_three}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/mode-earn-club"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={screens_four}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/mode-earn-club"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={screens_five}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "ConnectworX",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            A virtual events platform developed by BrainXchange, designed to
            facilitate engaging and interactive online events. It offers
            comprehensive tools for webinar planning, promotion, and execution,
            enabling organizations to effectively reach their target audiences.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link to={"/portfolio/connectworx"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={connect_hero}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/connectworx"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={keynote_features}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/connectworx"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={studio_features}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link to={"/portfolio/connectworx"}>
              <motion.img
                onHoverStart={handleHoverStart}
                whileHover={{
                  scale: 0.95,
                  rotate: `${randomRotation}deg`,
                }}
                src={networking_features}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full flex flex-col  relativebg-white dark:bg-neutral-950 max-w-7xl px-[2em] mx-auto"
      ref={containerRef}
    >
      <div className="md:grid grid-cols-2">
        <div className="grid-cols-2 md:grid-cols-1 mb-[4em] md:mb-[2em]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid-cols-1 mb-8 text-[35px]/[1.1] font-[700] md:text-5xl/[1.2] md:mb-10 "
          >
            <span className="text-gfc-accent">Smart Solutions</span> for an
            Evolving World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-base md:text-lg text-gray-800 dark:text-gray-500 "
          >
            A glimpse into our cutting-edge solutions for forward-thinking
            businesses. Each project showcases our expertise in seamless user
            experiences, strategic problem-solving, and measurable impact. See
            how we turn challenges into opportunities—one success at a time.
          </motion.p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40  top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-700 dark:text-gray-500 mb-4">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-500 dark:text-gray-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-motion.img
           onHoverStart={handleHoverStart}
          whileHover={{
            scale: 0.95,
            rotate: `${randomRotation}deg`,
          }}:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-neutral-700 via-gfc-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
