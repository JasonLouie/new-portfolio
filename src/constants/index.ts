import frontend from "@/src/assets/frontend.png";
import backend from "@/src/assets/backend.png";
import framework from "@/src/assets/framework.png";
import missing from "@/src/assets/missing.png";

export const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

export const bio = "I'm a Full-Stack Developer specializing in the MERN stack and Python, with a proven track record of building secure, scalable web applications and optimizing database performance.";

export const skills = [
    {
        name:"Frontend", details: ["React/Redux/Zustand", "Javascript/Typescript", "Node.js", "HTML/CSS"], logo: frontend,
    },
    {
        name:"Backend", details: ["test"], logo: backend,
    },
    {
        name:"Others", details: ["hello"], logo: framework,
    },
];

export const projects = [
    {
        name: "ChatForge", href: "/projects/chatforge", description: "An", stack: ["Python"], src: missing,
    },
    {
        name: "PokéGuesser", href: "/projects/pokeguesser", description: "A", stack: ["MongoDB", "Express", "React", "Node.js"], src: missing,
    },
    {
        name: "WebChat", href: "/projects/webchat", description: "A", stack: [], src: missing,
    },
    {
        name: "Wordle Clone", href: "/projects/wordle-clone", description: "An", stack: [], src: missing,
    },
    {
        name: "AniWho", href: "/projects/aniwho", description: "A", stack: [], src: missing,
    },
];

export const contacts = [
    {
        id: 0, tip: "LinkedIn", href: "https://www.linkedin.com/in/JasonLouie614",
    },
    {
        id: 1, tip: "GitHub", href: "https://github.com/JasonLouie",
    },
    {
        id: 2, tip: "Gmail", href: "mailto:jason.louie.614@gmail.com"
    }
];

// Resume data
export const summary = "Full-Stack Developer specializing in the MERN stack with expertise in building responsive, persistent web applications using React, Node.js, and MongoDB. Skilled in architecting state management systems with Zustand, implementing secure authentication flows (JWT/Passport.js), and designing RESTful APIs. Hands-on experience with Python, C#/.NET, and PHP, alongside a strong focus on database modeling and performance optimization. Seeking to contribute technical expertise and problem-solving skills to innovative full-stack development teams.";
