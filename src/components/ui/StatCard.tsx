import { animate, Easing, motion, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import React from "react";

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

export default function index({card}: StatCardProps) {
  return (
    <motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
		viewport={{ once: true, amount: 0.2 }}
      className=" col-span-2 mx-auto md:mx-0 md:col-span-1 flex flex-1 flex-col items-start justify-start space-y-4 p-6  rounded-2xl  max-w-sm shadow-[0_0_4px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_38px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    >
      {/* Icon + Statistic */}
      <div className="flex flex-col gap-10">
        <div className="h-fit w-fit p-3 bg-black text-white rounded-lg">
          {card.icon}
        </div>
        <p className="mb-2 text-center text-3xl font-bold text-neutral-800">
          <Counter from={card.statRange[0]} to={card.statRange[1]} />{card.symbol}
        </p>
      </div>

      {/* Title */}
      <div className="text-lg/6  font-semibold text-gfc-accent leading-tight">
        {card.titleStack[0]}<br /> {card.titleStack[1]}
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

export function Counter ({
	from = 0,
	to,
	animationOptions,
	className = "text-7xl font-semibold sm:text-6xl",
}: AnimatedCounterProps) {
	const ref = React.useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true });

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
};