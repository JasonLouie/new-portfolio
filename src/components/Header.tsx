"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants/constants";
import Button from "./Button";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = usePathname();

    // Prevent scrolling if navigation is open
    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
        document.body.style.overflow = openNavigation ? "" : "hidden";
    };

    const handleClick = () => {
        if (!openNavigation) return;

        document.body.style.overflow = "";
        setOpenNavigation(false);
    }

    const isPathActive = (targetPath: string) => {
        if (targetPath === "/") return pathname === "/";

        // Ensure match is /path or /path/, but not /path1.../
        return (
            pathname === targetPath || pathname!.startsWith(`${targetPath}/`)
        );
    };

    return (
        <header className="sticky top-0 w-full bg-green-950/70 backdrop-blur-sm min-h-17 flex items-center px-4 z-10 justify-end">
            <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-17 left-0 right-0 bottom-0 font-space justify-center h-[calc(100vh-68px)] md:static md:flex md:h-auto md:mx-auto`}>
                <div className="relative flex flex-col items-center justify-center gap-y-7.5 mx-auto md:flex-row md:gap-x-3 lg:gap-x-5 xl:gap-x-7">
                    {navLinks.map((link) => {
                        // Check if the link is active. Use startsWith for nested routes like /projects/pokeguesser
                        const isActive = isPathActive(link.href);

                        return (
                            <Button
                                key={link.name}
                                href={link.href}
                                className={`block relative uppercase p-4 hover:text-white text-nav transition-colors ${
                                    isActive
                                        ? "nav-active"
                                        : "text-white/50"
                                }`}
                                onClick={handleClick}
                            >
                                {link.name}
                            </Button>
                        );
                    })}
                </div>
                <MobileMenu />
            </nav>
            <Button
                className="md:hidden w-11 h-11"
                onClick={toggleNavigation}
            >
                <div className={`hamburger-menu ${openNavigation ? "open" : ""}`}></div>
            </Button>
        </header>
    );
}
