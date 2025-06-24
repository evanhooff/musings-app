import { cn } from "@repo/ui/lib";

interface ActionProps {
    className?: string;
    children?: React.ReactNode
}

const Action: React.FC<ActionProps> = ({ className, children }) => {
    return (
      <div className={cn("bg-yellow-200", className)}>
          {children}
      </div>
    );
};

export { Action };