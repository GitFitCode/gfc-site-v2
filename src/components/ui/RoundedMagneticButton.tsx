import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

interface RoundedMagneticButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

export default function RoundedMagneticButton({
  children,
  backgroundColor = '#3cb5b8', 
  ...attributes
}: RoundedMagneticButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);



  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  useEffect(() => {
    // console.log("circle ref:", circle.current); // Debugging

    if (!circle.current) return;
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
				className='radius-full cursor-pointer relative flex items-center justify-center py-[15px] px-[60px]'
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="circle"
        ></div>
      </div>
    </Magnetic>
  );
}
