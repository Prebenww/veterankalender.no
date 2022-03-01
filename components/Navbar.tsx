import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const { pathname } = useRouter();
    return (
        <div
            className="flex items-center justify-between px-3 lg:px-20"
            style={{ height: "10vh" }}
        >
            <a>
                <Link href="/">
                    <div className="flex items-center space-x-4 cursor-pointer ">
                        <img
                            src="assets/logo2.png"
                            alt=""
                            className="object-contain w-12 h-12 "
                        />
                        <div className="hidden text-gray-200 md:block">
                            <p>For alt vi har. Og alt vi er.</p>
                            <p>Veterankalenderen</p>
                        </div>
                    </div>
                </Link>
            </a>

            <div className="flex space-x-6 text-base lg:text-xl ">
                <Link href="/" >
                    <a className={pathname === "/" ? "text-amber-300" : "text-white"}>FORSIDE</a>
                </Link>
                <Link href="/family">
                    <a className={pathname === "/family" ? "text-amber-300" : "text-white"}>KJØP</a>
                </Link>
                <Link href="/stats">
                    <a className={pathname === "/stats" ? "text-amber-300" : "text-white"}>KONTAKT</a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;