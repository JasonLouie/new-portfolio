import { IconType } from "react-icons";

interface Logo {
    icon: IconType,
    color: string
}

interface Detail {
    name: string,
    icon: IconType,
    color: string
}

interface SkillCardProps {
    name: string,
    details: Detail[],
    logo: Logo
}

export default function SkillCard({ name, details, logo }: SkillCardProps) {
    return (
        <div className="relative px-3 pt-12 bg-gray-500 h-60 w-full max-w-120 2xl:max-w-160 2xl:h-80">
            <div className="absolute inset-x-0 mx-auto -top-9 flex justify-center items-center bg-green-600 h-18 w-18 rounded-[50%] px-3">
                <logo.icon className={`h-full w-full ${logo.color}`} />
            </div>
            <h2 className="text-xl font-bold text-center mb-3">{name}</h2>
            <div className="flex flex-row gap-3 flex-wrap justify-center">
                {details.map((detail) => (
                    <div key={detail.name}>
                        <detail.icon className={`mx-auto w-8 h-8 mb-1 ${detail.color}`}/>
                        <p className="text-center">{detail.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
