import { cn } from "@repo/ui/lib";

interface MenuProps {
    className?: string;
    children?: React.ReactNode
}

const Menu: React.FC<MenuProps> = ({ className, children }) => {
    return (
      <div className={cn("bg-white text-black", className)}>
          {children}
      </div>
    );
};

export { Menu };