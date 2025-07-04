import { cn } from "../helpers/cn";
import "../styles/ui.css";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div aria-live="polite" aria-busy="true" className={className} {...props}>
      <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
        ‌
      </span>
      <br />
    </div>
  );
}

const SVGSkeleton = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <svg className={cn("animate-pulse rounded bg-gray-300", className)} />
);

export { SVGSkeleton, Skeleton };
