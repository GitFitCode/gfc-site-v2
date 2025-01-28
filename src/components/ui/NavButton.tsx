import FlipLink from "./FlipLink";
import Magnetic from "./Magnetic";
import { NavItemType } from "../Header/MainNav";


export const NavButton = ({
  linkClassName,
  handleClick,
  navItem,
  isActive = false,
}: {
  linkClassName: string;
  handleClick: () => void;
  navItem: NavItemType;
  isActive?: boolean;
}) => {
  return (
    <Magnetic>
      <div className="py-3 px-6 bg-neutral-700 hover:bg-gfc-primary rounded-md shadow-sm cursor-pointer">
        <FlipLink
          item={navItem}
          isActive={isActive}
          fontSize="20px"
          secondTextColor="text-neutral-50"
          className={linkClassName}
          handleClick={handleClick}
        >
          {navItem.content}
        </FlipLink>
      </div>
    </Magnetic>
  );
};
