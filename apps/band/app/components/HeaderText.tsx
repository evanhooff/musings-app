import React from "react";

type HeaderTextProps = {
    text: string;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    pageTitle?: boolean;
};

const sizeMap: Record<number, string> = {
    1: "text-8xl",
    2: "text-6xl",
    3: "text-5xl",
    4: "text-4xl",
    5: "text-3xl",
    6: "text-2xl",
};

export const HeaderText: React.FC<HeaderTextProps & { className?: string; gradient?: boolean }> = ({
    text,
    pageTitle = false,
    size = 2,
    className = "",
    gradient = true,
}) => {
    const Tag = pageTitle ? 'h1' : `h${size}` as keyof JSX.IntrinsicElements;
    const gradientClasses = gradient
        ? "bg-gradient-to-r from-blue-200 to-blue-900 bg-clip-text text-transparent"
        : "text-orange-600";
    return (
        <Tag
            className={`${className} font-serif tracking-widest text-center ${gradientClasses} ${sizeMap[size]}`}
        >
            {text}
        </Tag>
    );
};