import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const space_grotesk = Space_Grotesk({
    weight: "600",
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space",
});

const sora = Sora({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sora",
});

export const metadata: Metadata = {
    title: "J.L. Portfolio",
    description: "Jason Louie's portfolio showcasing experiences and projects",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className={`${sora.variable} ${space_grotesk.variable} antialiased min-h-screen flex flex-col`}>
                <Header />
                <main className="grow px-page-x py-page-y">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
