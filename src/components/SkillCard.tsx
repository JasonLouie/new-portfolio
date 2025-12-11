import Image, { StaticImageData } from "next/image";

interface SkillCardProps {
    name: string,
    details: string[],
    logo: StaticImageData
}

export default function SkillCard({
    name,
    details,
    logo
}: SkillCardProps) {
    return (
        <div className="relative px-3 pt-12 bg-gray-500 w-full max-w-[70vw] h-60">
            <div className="absolute inset-x-0 mx-auto -top-9 flex justify-center items-center bg-green-600 h-18 w-18 rounded-[50%] px-3">
                <Image src={logo} alt={name} />
            </div>
            <h2 className="text-xl font-bold text-center">{name}</h2>
            <ul>
                {details.map(detail => <li className="list-style-check" key={detail}>{detail}</li>)}
            </ul>
        </div>
    );
}