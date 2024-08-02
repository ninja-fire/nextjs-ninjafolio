import Link from "next/link";
import Image from "next/image";
import call from "../../public/call.svg";

export default function BtnCallYellow({ text = "", target = "", href = "" }) {
    return (
        <div className="group flex pb-2 pr-2 hover:pb-1 hover:pr-1 active:pb-0 active:pr-0 rounded-full transition-all items-end h-20">
            <Link
                href={href}
                target={target}
                className="flex h-fit bg-primary transition-all justify-center items-center px-8 py-4 gap-2 rounded-full border-4 border-background shadow-darkXl group-hover:shadow-darkSm transition-all group-active:shadow-none">
                <Image priority src={call} alt='' className="w-6 group-active:scale-110 transition-all" />
                <span className="btnText text-background inline text-nowrap">{text}</span>
                <Image priority src={call} alt='' className="w-6 group-active:scale-110 transition-all" />
            </Link>
        </div>
    );
}