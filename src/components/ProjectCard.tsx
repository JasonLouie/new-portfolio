import Button from "./Button";

interface ProjectProps {
    name: string,
    href: string,
    description: string
};

export default function ProjectCard({
    name,
    href,
    description
} : ProjectProps) {
    return (
        <Button
            href={href}
            className="p-2"
        >
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </Button>
    );
}