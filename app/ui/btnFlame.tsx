import Link from "next/link";
import Image from "next/image";
import flame from "../../public/flame.svg";

export default function BtnFlame({ text = "", target = "", href = ""}) {
    return (
        <Link
            href={href}
            target={target}
            className="flex w-fit bg-label transition-all justify-center items-center px-8 py-4 gap-2 rounded-full border border-background darkXl">
            <Image priority src={flame} alt='' className="w-6" />
            <span className="btnText text-background inline text-nowrap">{text}</span>
            <Image priority src={flame} alt='' className="w-6"/>
        </Link>
    );
}