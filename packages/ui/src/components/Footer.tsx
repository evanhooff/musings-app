import { tv, VariantProps } from "tailwind-variants";
import { Skeleton } from "./skeleton";
import { cn } from "../../helpers/cn";

interface FooterProps extends VariantProps<typeof footerStyle> {
    className?: string;
}

const footerStyle = tv({
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

const Footer: React.FC<FooterProps> = ({ className, alignment }) => {
    return (
        <footer className={cn(footerStyle({ alignment }), className)}>
            <span>Footer</span>
        </footer>
    );
};

const FooterSkeleton: React.FC<FooterProps> = ({ className, alignment }) => {
    return (
        <footer className={cn(footerStyle({ alignment }), className)}>
            <Skeleton className="w-full h-full"></Skeleton>
        </footer>
    );
};

export { FooterSkeleton, Footer };