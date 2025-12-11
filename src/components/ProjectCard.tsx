import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface ProjectProps {
    name: string,
    href: string,
    description: string,
    stack: string[],
    src: StaticImageData,
};

export default function ProjectCard({
    name,
    href,
    description,
    stack,
    src
} : ProjectProps) {
    return (
        <div
            className="bg-gray-800 w-[70vw] m-auto h-100 mt-14 flex flex-col"
        >
            <Button className="block max-h-10 max-w-10" href={href}>
                <Image src={src} alt={`Photo of ${name}`} className="h-10 w-10" />
            </Button>
            <h2 className="text-center font-bold text-xl mb-3">{name}</h2>
            <div className="flex flex-row justify-center">
                {stack.map((s, i) => <p key={`${name}-${s}-${i}`} className="bg-gray-700 py-1 px-2 font-bold text-[0.75rem] rounded-xl not-first:ml-4 ">{s}</p>)}
            </div>
        </div>
    );
}