import Link from "next/link";
import Image from "next/image";
import telegram from "../../public/telegram.svg";

export default function BtnSendDark({ text = "", target = "", href = ""}) {
    return (
        // <Link
        //     href={href}
        //     target={target}
        //     className="flex w-full bg-label transition-all justify-center items-center px-8 py-4 gap-2 rounded-full border-4 border-background shadow-darkXl">
        //     <Image priority src={telegram} alt='' className="w-6" />
        //     <span className="btnText text-background inline text-nowrap">{text}</span>
        //     <Image priority src={telegram} alt='' className="w-6"/>
        // </Link>

        // <div className="group flex pb-2 pr-2 hover:pb-1 hover:pr-1 active:pb-0 active:pr-0 rounded-full transition-all">
        //         <Link
        //             href={href}
        //             target={target}
        //             className="flex w-content bg-label transition-all justify-center items-center px-8 py-4 gap-2 rounded-full border-4 border-background shadow-darkXl hover:shadow-darkSm transition-all active:shadow-none">
        //             <Image priority src={telegram} alt='' className="w-6 group-active:scale-110 transition-all" />
        //             <span className="btnText text-background inline text-nowrap">{text}</span>
        //             <Image priority src={telegram} alt='' className="w-6 group-active:scale-110 transition-all" />
        //         </Link>
        //     </div>

        <div className="group flex pb-2 pr-2 hover:pb-1 hover:pr-1 active:pb-0 active:pr-0 rounded-full transition-all">
        <Link
            href={href}
            target={target}
            className="flex h-fit bg-label transition-all justify-center items-center px-8 py-4 gap-2 rounded-full border-4 border-background shadow-darkXl group-hover:shadow-darkSm transition-all group-active:shadow-none">
            <Image priority src={telegram} alt='' className="w-6 group-active:scale-110 transition-all" />
            <span className="btnText text-background inline text-nowrap">{text}</span>
            <Image priority src={telegram} alt='' className="w-6 group-active:scale-110 transition-all" />
        </Link>
    </div>
    );
}