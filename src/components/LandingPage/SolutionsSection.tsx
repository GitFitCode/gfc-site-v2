"use client";
import { defaultMaxListeners } from "events";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  m,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import web from "../../images/services/web.webp";
import dashboard from "../../images/services/dashboard.webp";
import monitor from "../../images/services/monitor.png";
import analytics from "../../images/services/analytics.png";
import integrations from "../../images/services/integrations.webp";
import ai from "../../images/services/ai.png";
import { Bolt, Bot, Computer, Database, Webhook } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const SolutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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
        <div className="grid-cols-2 md:grid-cols-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid-cols-1 mb-8 text-[35px]/[1.1] font-[700] md:text-5xl/[1.2] md:mb-10 "
          >
            <span className="text-gfc-accent">Software Solutions</span>{" "}
            Designed for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-base md:text-lg text-gray-800 dark:text-gray-500 mb-[4em]"
          >
            From intelligent automation to AI-powered insights, we build custom
            software solutions that drive efficiency, scalability, and
            innovation. Our expertise spans multiple industries, ensuring your
            technology evolves alongside your business needs.
          </motion.p>
        </div>
      </div>

      <section className="max-w-7xl py-12 text-slate-800">
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
                <Webhook className="h-6 w-6" />
              </div>

              <CardTitle>
                SaaS Development <br />& API Integrations
              </CardTitle>
              <p className="text-sm text-gray-600 max-w-[450px]">
                Whether you’re launching a new SaaS product or scaling an
                existing platform, we provide robust, cloud-native architectures
                for seamless growth.
              </p>
            </div>
            <div
              className="bg-neutral-100 absolute bottom-0 left-4 right-4 top-[50%] translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
              style={{
                backgroundImage: `url(${integrations})`,
                backgroundSize: "100%",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <motion.div
                className="absolute top-[42%] left-[42%] transform -translate-x-1/2 -translate-y-1/2
                   flex items-center justify-center 
                   w-12 h-12 rounded-full text-white bg-gfc-accent
                   cursor-pointer"
                initial={{
                  boxShadow: "0 0 0 0 rgba(128,128,128, 0.1)",
                  scale: 1,
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 black",
                    "0 0 0 10px rgba(128,128,128, 0.1)",
                    "0 0 0 10px rgba(128,128,128, 0.1)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                exit={{ boxShadow: "0 0 0 0 rgba(128,128,128, 0.1)" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              >
                <Bolt className="w-5 h-5" />
              </motion.div>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <div className="flex flex-col gap-8">
              <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
                <Database className="h-6 w-6" />
              </div>

              <CardTitle>
                Data Engineering <br />& Analytics
              </CardTitle>
              <p className="text-sm text-gray-600 max-w-[450px]">
                Turn raw data into actionable insights with our advanced data
                pipelines, real-time analytics, and AI-driven reporting.
              </p>
            </div>

            <div
              className="absolute bottom-0 left-4 right-4 top-[35%] translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
              style={{
                backgroundImage: `url(${dashboard})`,
                backgroundSize: "210%",
                backgroundPosition: "-198px -102px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </BounceCard>
        </div>

        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8 space-y-4">
            <div className="flex flex-col gap-8">
              <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
                <Computer className="h-6 w-6" />
              </div>

              {/* <div className="flex flex-col"> */}
              <CardTitle>
                Custom <br />
                Software Development
              </CardTitle>
              <p className="text-sm text-gray-600 max-w-[450px]">
                We build tailor-made software solutions that align with your
                industry-specific needs—whether for startups, enterprises, or
                government agencies.
              </p>
              {/* </div> */}
            </div>

            <div
              className="absolute bottom-0 left-4 right-4 top-[35%] translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
              style={{
                backgroundImage: `url(${web})`,
                backgroundSize: "210%",
                backgroundPosition: "-198px -102px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
                <Bot className="h-6 w-6" />
              </div>

              <CardTitle>
                AI & ML <br /> Solutions
              </CardTitle>
              <p className="text-sm text-gray-600 max-w-[450px]">
                Leverage the power of AI to automate decision-making, enhance
                customer experiences, and unlock new business opportunities.
              </p>
            </div>

            <div
              className="absolute bottom-0 left-4 right-4 top-[40%] translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
              style={{
                backgroundImage: `url(${ai})`,
                backgroundSize: "210%",
                backgroundPosition: "-198px 0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </BounceCard>
        </div>
      </section>
    </div>
  );
};

export default SolutionsSection;

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
  // State to hold the random rotation value
  const [randomRotation, setRandomRotation] = useState(0);
  // Function to generate a new random rotation between -5 and +5
  const handleHoverStart = () => {
    const rotation = Math.floor(Math.random() * 11) - 5; // -5..+5 (inclusive)
    setRandomRotation(rotation);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      onHoverStart={handleHoverStart}
      whileHover={{
        scale: 0.95,
        rotate: `${randomRotation}deg`,
      }}
      className={`group relative min-h-[600px] md:min-h-[700px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-xl md:text-3xl font-semibold">{children}</h3>;
};
