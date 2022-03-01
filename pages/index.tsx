import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
    const { push } = useRouter();
    console.log(process.env.VERCEL_URL);

    return (
        <div className="grid p-5 lg:px-24 md:grid-cols-2">
            <div className="textBlock-wrapper">
                <h1 className="text-4xl">
                    <span className="font-bold ">Veterankalenderen </span>
                   <span className="text-2xl"> Jubileumsutgave 75 år - Special Edition
                    1940 - 1945
                       </span>
                </h1>
                <p className="textBlock-subtitle text-md">
                    Veterankalenderen utgis hvert år som en honnør til alle de ca. 100 000 veteraner som har deltatt i internasjonale operasjoner  rundt om i verden, og er et symbol på vår støtte til norske veteraner og til de aktivt tjenestegjørende for den innsats de yter.
                </p>
                <button
                    onClick={() => push("/family")}
                    className="w-32 p-2 text-2xl font-medium tracking-wider text-black uppercase focus:outline-none md:w-48 bg-amber-300 rounded-md    "
                >
                    Kjøp
                </button>
            </div>

            <Image
                src="/assets/hero2.png"
                alt="walter white"
                height={670}
                width={700}
                objectFit="contain"
                quality={100}
            />
        </div>
    );
}