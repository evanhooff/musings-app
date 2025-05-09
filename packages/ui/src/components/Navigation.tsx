import { tv, VariantProps } from "tailwind-variants";
import { cn } from "../../helpers/cn";
import { Skeleton } from "./skeleton";

interface NavigationProps extends VariantProps<typeof navigationStyle> {
    className?: string;
}

const navigationStyle = tv({
    base: "bg-gray-800 text-center text-white",
    variants: {
        alignment: {
            left: "text-left",
            right: "text-right",
        },
    },
    defaultVariants: {
        alignment: "left",
    },
});

const Navigation: React.FC<NavigationProps> = ({ className, alignment }) => {
    return (
        <nav className={cn(navigationStyle({ alignment }), className)}>
            <span>Navigation</span>
        </nav>
    );
};

const NavigationSkeleton: React.FC<NavigationProps> = ({ className, alignment }) => {
    return (
        <nav className={cn(navigationStyle({ alignment }), className)}>
            <Skeleton className="w-full h-full bg-gray-300/20"></Skeleton>
        </nav>
    );
};

export { NavigationSkeleton, Navigation };