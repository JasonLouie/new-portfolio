import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
    id?: string;
    className: string;
    href?: string;
    onClick?: MouseEventHandler;
    children: React.ReactNode;
    buttonType?: "button" | "submit" | "reset";
    download?: string;
    disabled?: boolean;
    hoverEffect?: string;
}

export default function Button({
    id,
    className,
    href,
    onClick,
    children,
    buttonType,
    download,
    disabled,
    hoverEffect
} : ButtonProps) {
    const classes = `${className} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`;

    const renderButton = () => {
        return (
            <button id={id} className={classes} onClick={onClick} disabled={disabled} type={buttonType ? buttonType : "button"}>
                {children}
            </button>
        );
    };

    const renderLink = () => {
        return (
            <Link href={href!} className={classes} onClick={onClick}>
                {children}
            </Link>
        )
    }

    const renderDownload = () => {
        return (
            <a href={href!} className={classes} >{children}</a>
        );
    }

    return href ? (download ? renderDownload() : renderLink()) : renderButton();
}