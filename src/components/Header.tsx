"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "../constants/constants";
import Button from "./Button";

export default function Header() {
    const pathname = usePathname();

    const isPathActive = (targetPath: string) => {
        if (targetPath === "/") return pathname === "/";

        // Ensure match is /path or /path/, but not /path1.../
        return pathname === targetPath || pathname!.startsWith(`${targetPath}/`);
    }

    return (
        <header className="w-full bg-green-950">
            <nav className="font-space flex justify-center gap-8">
                {navLinks.map((link) => {
                    // Check if the link is active. Use startsWith for nested routes like /projects/pokeguesser
                    const isActive = isPathActive(link.href);

                    return (
                        <Button
                            key={link.name}
                            href={link.href}
                            className={`p-4 hover:text-white text-2xl text-gray-500${isActive ? ` relative before:content-[''] text-white before:absolute before:bottom-1 before:m-auto before:bg-green-700 before:rounded-xs before:h-1 before:w-[calc(100%-2rem)]` : ""}`}
                        >
                            {link.name}
                        </Button>
                    );
                })}
            </nav>            
        </header>
    );
}
