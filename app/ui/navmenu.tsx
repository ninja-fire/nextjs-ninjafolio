import logo from "../../public/ninjalogo.svg";
import Image from "next/image";
import Link from "next/link";
import BtnFlameDark from "./btnFlameDark";
import BtnFlameLight from "./BtnFlameLight";
import telegram from "../../public/telegram.svg";


export default function NavMenu() {
    return (
        <div id="top" className="flex w-full px-6 md:px-32 py-3 justify-between items-center">
            <Link className="flex" href="/">
                <div className="flex">
                    <Image priority src={logo} alt='' className="w-20" />
                </div>
            </Link>
            <div className="hidden 2xl:flex">
                <BtnFlameDark text="Contact me" href="/#contact"/>
            </div>
            <div className="2xl:hidden flex">
                <BtnFlameLight text="Contact me" href="/#contact"/>
            </div>
        </div>
    );
}