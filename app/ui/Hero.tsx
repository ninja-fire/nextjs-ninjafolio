import Image from "next/image";
import Link from "next/link";
import ninjapic from "../../public/ninjapic.png";

export default function Hero() {
    return (
        <div className="flex gap-20 px-6 md:px-32 py-16 justify-center items-center">
            <div className="flex flex-col gap-16 w-4/12">
                <h1>I <span className="text-primary">fire</span> design, You <span className="text-primary">launch</span></h1>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-end">
                        <div className="flex items-center justify-center border-2 border-label rounded-full shadow-lightSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <p className="text-label text-2xl font-extrabold leading-8">Hi, I’m Ninja Fire!</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 w-8/12">
                <div className="flex gap-6 h-60">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt='' />
                    </div>
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt='' />
                    </div>
                </div>
                <div className="flex gap-6 h-60">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt='' />
                    </div>
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt='' />
                    </div>
                </div>
                <div className="flex gap-6 h-60">
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt=''/>
                    </div>
                    <div className="flex relative items-center justify-center border-4 border-background shadow-darkXl overflow-hidden">
                        <Image priority src={ninjapic} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}