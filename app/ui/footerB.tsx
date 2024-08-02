import Link from "next/link";
import Image from "next/image";
import flame from "../../public/flame.svg";

export default function FooterB() {
    return (
        <div className="flex w-full px-6 md:px-32 py-20 justify-center items-center">
            <div className="flex gap-1 items-center justify-center">
                <p className="text-xs">Made with</p>
                <Image priority src={flame} alt='' className="w-6" />
                <p className="text-xs">by NinjaFire</p>
            </div>
        </div>
    );
}