import { cn } from "../../lib/util";
import { NavItemType } from "../Header/MainNav";
import { Button, type ButtonProps } from "./Button";
import FlipLink from "./FlipLink";
import Magnetic from "./Magnetic";
//======================================Shiny Background

export interface ShinyBgButtonProps extends ButtonProps {
	content: string;
  handleClick: () => void;
  navItem: NavItemType;
  isActive?: boolean;
	linkClassName?: string;
}

<<<<<<< HEAD
export const ShinyBgButton = ({  navItem, linkClassName, content, handleClick, ...props }: ShinyBgButtonProps) => {
=======
export const ShinyBgButton = ({ ...props }: ShinyBgButtonProps) => {
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
  return (
    <Magnetic>
      <Button
        {...props}
        className={cn(
					`${props.className}`,
          "relative rounded-lg tracking-wide overflow-hidden duration-[2200ms] shadow-md",
          " text-white bg-gfc-accent hover:bg-neutral-800 uppercase font-black",
          "before:absolute before:inset-0 before:bg-[length:200%_100%] before:animate-bg-shine",
          "before:bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.4),55%,transparent)]"
        )}
      >
        <FlipLink
<<<<<<< HEAD
          item={navItem}
          isActive={false}
          fontSize="20px"
          secondTextColor="text-gray-50"
          className={linkClassName}
          handleClick={handleClick}
        >
          {content}
=======
          item={props.navItem}
          isActive={false}
          fontSize="20px"
          secondTextColor="text-neutral-50"
          className={props.linkClassName}
          handleClick={props.handleClick}
        >
          {props.content}
>>>>>>> a49a46a (chore: create template buttons and modified navigation)
        </FlipLink>
      </Button>
    </Magnetic>
  );
};
