import { tv, VariantProps } from "tailwind-variants";
import { cn } from "../../helpers/cn";
import { Skeleton } from "./skeleton";

interface HeaderProps extends VariantProps<typeof headerVariants> {
    children: React.ReactNode;
    className?: string;
}

const headerVariants = tv({
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

const Header: React.FC<HeaderProps> = ({ children, className, alignment }) => {
    return (
        <header className={cn(headerVariants({ alignment }), className)}>
            {children}
        </header>
    );
};

export const HeaderSkeleton: React.FC<HeaderProps> = ({ className, alignment }) => {
    return (
        <header className={cn(headerVariants({ alignment }), className)}>
            <Skeleton className="w-full h-full bg-gray-300/20"></Skeleton>
        </header>
    );
};

export default Header;