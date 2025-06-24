import { cn } from "../../lib";

export interface CanvasProps {
    className?: string;
    children: React.ReactNode
}

const Canvas: React.FC<CanvasProps> = ({ className, children }) => {
    return (
      <div className={cn("border border-grey mx-4 my-4", className)}>
          {children}
      </div>
    );
};

export { Canvas };