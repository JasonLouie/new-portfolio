import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface ProjectProps {
    name: string,
    href: string,
    description: string,
    stack: string[],
    src: StaticImageData
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
            className="flex flex-col bg-gray-800 m-auto max-w-full w-120 min-h-90 md:w-160 md:min-h-120 mt-14 last:mb-14"
        >
            <Button className="flex justify-center w-full h-67.5 mb-2 md:h-90 md:mb-4 bg-green-900" href={href}>
                <Image src={src} alt={`Photo of ${name}`} className="h-full w-auto" loading="eager" />
            </Button>
            <h2 className="text-center font-bold text-xl mb-3">{name}</h2>
            <div className="flex flex-row justify-center flex-wrap mb-4 gap-2 md:gap-x-4">
                {stack.map((s, i) => <p key={`${name}-${s}-${i}`} className="bg-gray-700 py-1 px-2 font-bold text-[0.75rem] rounded-xl">{s}</p>)}
            </div>
        </div>
    );
}