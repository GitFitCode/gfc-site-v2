import { cn } from '../../lib/util';
import { Send } from 'lucide-react';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '../ui/Button';
type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;
//======================================
export const SendLink = ({
  children,
  Icon = <Send size="20" />,
  ...rest
}: ButtonProps & { Icon: React.ReactNode }) => {
  return (
    <Button
      {...rest}
      className={cn(
				'w-[100px] h-[30px] rounded-full',
        'relative overflow-hidden border shadow group',
        // light mode
        'border-zinc-300 text-zinc-800 bg-zinc-50',
        // dark mode
        'dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-950',
        rest.className,
      )}
    >
      <span className="absolute inset-0 rounded-full flex items-center justify-center size-full duration-700 ease-[cubic-bezier(0.50,0.20,0,1)] -translate-x-full group-hover:translate-x-0 bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800">
        {Icon}
      </span>
      <span className="text-sm absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-out transform group-hover:translate-x-full ">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Button>
  );
};