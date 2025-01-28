import { motion } from "framer-motion";
import { Link } from "react-router";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function FlipLink({
  children,
  item,
  handleClick,
  isActive,
	className,
	fontSize,
  secondTextColor,
}: {
  children: string;
  item: any;
  handleClick: any;
  isActive: boolean;
	className?: string;
	fontSize?: string;
  secondTextColor?: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      animate={isActive ? "hovered" : "initial"} // Ensures the active link is always in "hovered" state
      className={`${className} relative block overflow-hidden whitespace-nowrap font-black uppercase `}
      style={{
        lineHeight: 0.9,
        fontSize: fontSize,
      }}
    >
      <Link to={item.route} onClick={handleClick}>
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className={`absolute inset-0 ${secondTextColor}`}> 
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: isActive ? 0 : "100%", // Ensures the active link starts at 0 (rolled up)
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}