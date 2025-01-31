import {
  animate,
  Easing,
  motion,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import React, { useState } from "react";

interface StatCardProps {
  card: StatCardType;
}

export interface StatCardType {
  icon: React.ReactNode;
  statRange: number[];
  titleStack: string[];
  subtitle: string;
  symbol?: string;
}

export default function index({ card }: StatCardProps) {
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
        rotate: `${randomRotation}deg`
      }}
      className="cursor-pointer col-span-2 mx-auto md:mx-0 md:col-span-1 flex flex-1 flex-col items-start justify-start space-y-4 p-6 rounded-2xl  max-w-sm bg-slate-100"
    >
      {/* Icon + Statistic */}
      <div className="flex flex-col gap-10">
        <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
          {card.icon}
        </div>
        <p className="mb-2 text-center text-3xl font-bold text-gray-800">
          <Counter from={card.statRange[0]} to={card.statRange[1]} />
          {card.symbol}
        </p>
      </div>

      {/* Title */}
      <div className="text-xl/6  font-semibold ">
        {card.titleStack[0]}
        <br /> {card.titleStack[1]}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-gray-600 text-sm"
      >
        {card.subtitle}
      </motion.p>
    </motion.div>
  );
}

// Counter Component
type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: { duration?: number; ease?: Easing | Easing[] };
  className?: string;
};

export function Counter({
  from = 0,
  to,
  animationOptions,
  className = "text-7xl font-semibold sm:text-6xl",
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.className = "text-4xl font-bold";
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
}
