import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
  Easing,
} from "framer-motion";
import { motion as three_motion } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { Button } from "../ui/moving-border";
import { useNavigationContext } from "../../contexts/navigation.context";

// Counter Component
type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: { duration?: number; ease?: Easing | Easing[] };
  className?: string;
};

const Counter = ({
  from = 0,
  to,
  animationOptions,
  className = "text-7xl font-semibold sm:text-6xl",
}: AnimatedCounterProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.className = "text-3xl md:text-4xl font-semibold";
    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 3, // Adjust duration as needed
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} className={className} />;
};

// Stats Component
const StatisticsSection = () => {
  const {isTablet, isDesktop} = useNavigationContext()
  const industries = [
    "Education",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Media",
    "Technology",
    "Telecommunications",
    "Transportation",
  ];

  return (
    <div className="w-full flex items-center justify-center relative max-w-7xl  px-[2em]">
      <div className="flex flex-col-reverse items-start gap-y-10 sm:gap-y-15 md:grid md:grid-cols-2 md:items-center md:justify-between md:gap-10 lg:items-center lg:gap-15 xl:gap-20">
        <div className="left-grid h-screen md:h-fit flex flex-col md:grid text-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-sans mb-8 text-3xl font-[700] md:text-5xl/[1.2] md:mb-10 "
          >
            <span className="text-gfc-accent">Technology That Evolves</span>{" "}
            With Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-sm md:text-base dark:text-neutral-500 mb-[4em] md:mb-[6em]"
          >
            We don’t just build software—we engineer solutions that grow, adapt,
            and optimize alongside your business, keeping you ahead of the
            curve.
          </motion.p>
          <h4 className="text-lg md:text-xl mb-[2em] text-[#757575] font-[300] leading-relaxed">
            Industries Served
          </h4>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4 mb-[4em]"
          >
            {industries.map((industry, index) => (
              <Button
                key={index}
                borderRadius="1.75rem"
                containerClassName=""
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                {industry}
              </Button>
            ))}
          </motion.div>

          <h4 className="text-lg md:text-xl mb-[2em] text-[#757575] font-[300] leading-relaxed">
            Success in Numbers
          </h4>

          <div className="grid grid-cols-2 gap-4 item-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center rounded-lg object-cover h-24 md:h-40 w-full bg-neutral-50 shadow-[0_0_4px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_38px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <p className="mb-2 text-center text-lg text-neutral-800">
                <Counter from={0} to={105} /> +
              </p>
              <p className="max-w-48 text-sm text-center text-neutral-700">
                {" "}
                projects launched
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center rounded-lg object-cover h-24 md:h-40 w-full bg-neutral-50 shadow-[0_0_4px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_38px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <p className="mb-2 text-center text-lg text-neutral-800">
                <Counter from={0} to={15} />
                years
              </p>
              <p className="max-w-48 text-sm text-center text-neutral-700">
                of experience
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center rounded-lg object-cover h-24 md:h-40 w-full bg-neutral-50 shadow-[0_0_4px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_38px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <p className="mb-2 text-center text-lg text-neutral-800">
                <Counter from={0} to={5} />
                million
              </p>
              <p className="max-w-48 text-sm text-center text-neutral-700">
                users impacted.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center rounded-lg object-cover h-24 md:h-40 w-full bg-neutral-50 shadow-[0_0_4px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_38px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <p className="mb-2 text-center text-lg text-neutral-800">
                <Counter from={0} to={99} />%
              </p>
              <p className="max-w-48 text-sm text-center text-neutral-700">
                {" "}
                uptime
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3D model of logo */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex items-center justify-center"
        >
          <Canvas
            style={{ height: "100vh", width: "98%" }}
            className="bg-neutral-50"
            orthographic
            camera={{ position: [0, 0, 200], zoom: isDesktop ? 300 : isTablet? 200: 150 }}
          >
            <Model />
            <Environment preset="studio" />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsSection;

export function Model() {
  const { nodes } = useGLTF("/short.glb");
  const [activeShape, setActiveShape] = useState(1);
  const {isTablet, isDesktop} = useNavigationContext()

  useEffect(() => {
    setTimeout(() => {
      if (activeShape == 11) {
        setActiveShape(1);
      } else {
        setActiveShape(activeShape + 1);
      }
    }, 2000);
  }, [activeShape]);


  return (
    <group>
      <Mesh node={nodes.Node2} multiplier={1} isActive={activeShape == 1} />
      <Mesh node={nodes.Node1} multiplier={1} isActive={activeShape == 2} />
    </group>
  );
}

useGLTF.preload("/short.glb");

function Mesh({
  node,
  multiplier,
  isActive,
}: {
  node: any;
  multiplier: number;
  isActive: boolean;
}) {
  const { geometry, material, position, scale, rotation } = node;
  const a = multiplier / 2;

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
  };

  return (
    <Float>
      <three_motion.mesh
        castShadow={true}
        receiveShadow={false}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        animate={{
          rotateZ: isActive ? rotation.z + getRandomMultiplier() : null,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}
