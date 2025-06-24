import { cn } from "@repo/ui/lib";

interface DefenderProps {
    className?: string;
    children?: React.ReactNode
}

const Defender: React.FC<DefenderProps> = ({ className, children }) => {
    return (
      <div className={cn("bg-green-200", className)}>
          {children}
      </div>
    );
};

export { Defender };