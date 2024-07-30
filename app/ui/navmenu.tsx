import logo from "../../public/ninjalogo.svg";
import Image from "next/image";
import Link from "next/link";
import BtnFlame from "./btnFlame";
import telegram from "../../public/telegram.svg";
import call from "../../public/call.svg";


export default function NavMenu() {
    return (
      <div className="flex w-full px-32 py-3 justify-between items-center">
        <Link className="flex" href="/">
          <div className="flex">
          <Image priority src={logo} alt='' className="w-12 md:w-20"/>
          </div>
        </Link>
        <BtnFlame text="Contact me"/>
      </div>
    );
}