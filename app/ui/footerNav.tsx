import Link from "next/link";
import Image from "next/image";
import arrowstraight from "../../public/arrowstraight.svg";

export default function FooterNav({hrefprev = "", hrefnext = "", previous = "", next = ""}) {
    return (
        <div className="flex fixed bottom-0 px-6 md:px-32 py-6 justify-between items-center w-full bg-background z-[10]">
                <Link href={hrefprev} className="group flex items-center gap-6 w-full">
                    <Image priority src={arrowstraight} alt='' className="h-4 md:h-8 w-auto scale-x-[-1] group-hover:scale-x-[-110%] group-hover:scale-[110%] transition-all" />
                    <div className="flex flex-col gap-1">
                        <p className="text-2xl font-extrabold text-label group-hover:text-primary leading-8 transition-all">Previous</p>
                        <p className="text-placeholder group-hover:text-caption transition-all">{previous}</p>
                    </div>
                </Link>
                <p className="text-label/[48%] text-xs font-normal hidden lg:flex">Projects</p>
                <Link href={hrefnext} className="group flex items-center gap-6 w-full justify-end">
                    <div className="flex flex-col gap-1 items-end">
                        <p className="text-2xl font-extrabold text-label group-hover:text-primary leading-8 transition-all">Next</p>
                        <p className="text-placeholder group-hover:text-caption transition-all">{next}</p>
                    </div>
                    <Image priority src={arrowstraight} alt='' className="h-4 md:h-8 w-auto group-hover:scale-[110%] transition-all" />
                </Link>
            </div>
    );
}