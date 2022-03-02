import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
    const { push } = useRouter();
    console.log(process.env.VERCEL_URL);

    return (
        <>
        <div className="grid p-5 lg:px-24 md:grid-cols-2">

            <div className="textBlock-wrapper">
                <h1 className="text-4xl">
                    <span className="font-bold ">Veterankalenderen </span>
                   <span className="text-2xl text-amber-300"> Jubileumsutgave 75 år - Special Edition
                    1940 - 1945
                       </span>
                </h1>
                <p className="textBlock-subtitle text-md" >
                    Veterankalenderen utgies som en honnør til alle som har tjenestegjort i internasjonale operasjoner.
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
            <div className="grid p-5 lg:px-24 md:grid-cols-2">

                <div className="textBlock-wrapper">
                    <h1 className="text-4xl">
                        <span className="font-bold ">Følg oss på Facebook </span>

                    </h1>

                    <p className="textBlock-subtitle text-md" >

                        Overskuddet av salget går til veteraner og deres pårørende som trenger hjelp i Norge.

                        Veterankalender er laget av veteraner og stadig tjenestegjørende i alle ledd.



                        Utgiver av Veterankalender er: "Veteraner hjelper Veteraner"
                    </p>

                </div>

                <div>
                    <div id="fb-root"></div>
                    <script async defer crossOrigin="anonymous"
                            src="https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v13.0"
                            nonce="WW3hveOO"></script>
                    <div className="fb-page" data-href="https://www.facebook.com/veterankalender" data-tabs="timeline"
                         data-width="" data-height="" data-small-header="false" data-adapt-container-width="true"
                         data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/veterankalender" className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/veterankalender">Veterankalender</a></blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}