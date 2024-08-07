import Image from "next/image";
import ninjapic from "../../public/ninjapic.png";
import avantgarde from "../../public/avantgarde.png";
import looter from "../../public/looter/looter.png";
import trooper from "../../public/trooper/trooper.png";
import confab from "../../public/confab.png";
import family from "../../public/family/family.png";
import arrowimg from "../../public/arrowimg.png";

export default function Hero() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-20 px-6 md:px-32 py-16 pt-40 justify-center items-center">
            <div className="flex flex-col gap-16 2xl:w-4/12">
                <div className="flex flex-col gap-0">
                    <h1>I <span className="text-primary">fire</span> design,</h1> <h1>You <span className="text-primary">launch</span></h1>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-end">
                        <div className="flex items-center justify-center border-2 border-label rounded-full shadow-lightSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <p className="text-label text-2xl font-extrabold leading-8">Hi, I&apos;m Ninja Fire!</p>
                    </div>
                    <p className="text-caption font-normal">
                        I&apos;m a dedicated <span className="text-primary font-bold">Web3 UX/UI designer</span> with a deep understanding of <span className="text-primary font-bold">blockchain technology</span> and a knack for creating <span className="text-primary font-bold">intuitive</span>, <span className="text-primary font-bold">user-centered</span> designs. My goal is to <span className="text-primary font-bold">bridge the gap</span> between complex technologies and user-friendly interfaces, ensuring that the <span className="text-primary font-bold">decentralized web</span> is accessible to everyone. With a keen eye for detail and a commitment to innovation, I <span className="text-primary font-bold">help projects succeed</span> in the rapidly evolving Web3 space.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 2xl:w-8/12">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4 z-[2]">
                            <span className="text-xs text-background font-medium">design system</span>
                        </div>
                        <Image priority src={avantgarde} alt='' />
                    </div>
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-background font-medium">dapp design</span>
                        </div>
                        <Image priority src={confab} alt='' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-background font-medium">landing page design</span>
                        </div>
                        <Image priority src={family} alt='' />
                    </div>
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-background font-medium">pitch deck design</span>
                        </div>
                        <Image priority src={looter} alt='' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-background font-medium">branding design</span>
                        </div>
                        <Image priority src={trooper} alt='' />
                    </div>
                    <div className="flex relative items-center justify-center overflow-hidden">
                        <Image priority src={arrowimg} alt='' />
                    </div>
                </div>
            </div>
        </div >
    );
}