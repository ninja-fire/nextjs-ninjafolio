import Image from "next/image";
import Link from "next/link";
import ninjapic from "../../public/ninjapic.png";
import avantgarde from "../../public/avantgarde.png";
import looter from "../../public/looter.png";
import trooper from "../../public/trooper.png";
import confab from "../../public/confab.png";
import family from "../../public/family.png";
import arrowimg from "../../public/arrowimg.png";

export default function Hero() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-20 px-6 md:px-32 lg:px-60 2xl:px-32 py-16 justify-center items-center">
            <div className="flex flex-col gap-16 2xl:w-4/12">
                <div className="flex flex-col gap-0">
                    <h1>I <span className="text-primary">fire</span> design,</h1> <h1>You <span className="text-primary">launch</span></h1>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-end">
                        <div className="flex items-center justify-center border-2 border-label rounded-full shadow-lightSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <p className="text-label text-2xl font-extrabold leading-8">Hi, I’m Ninja Fire!</p>
                    </div>
                    <p className="text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 2xl:w-8/12">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <div className="flex absolute items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm px-2 py-1 left-4 top-4 z-[2]">
                            <span className="text-xs text-background font-medium">logo design</span>
                        </div>
                        <Image priority src={avantgarde} alt=''/>
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