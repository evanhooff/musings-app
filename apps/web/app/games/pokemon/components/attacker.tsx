import { cn } from "@repo/ui/lib";

interface AttackerProps {
    className?: string;
    children?: React.ReactNode
}

const Attacker: React.FC<AttackerProps> = ({ className, children }) => {
    return (
      <div className={cn("bg-red-200", className)}>
          {children}
      </div>
    );
};

export { Attacker };