import Image from "next/image";
import background from "@/src/assets/background.png";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Image className="size-1/2" src={background} alt="green space background" loading="eager"/>
        </>
    );
}
