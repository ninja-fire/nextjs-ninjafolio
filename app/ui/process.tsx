import flame from "../../public/flame.svg";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import Image from "next/image";

export default function Process() {
    return (
        <div className="flex flex-col gap-16 px-6 md:px-32 py-20 bg-primary items-center justify-center">
            <h2 className="text-background">Trust the process</h2>
            <div className="flex flex-col xl:flex-row gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex px-6 py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                    <Image priority src={one} alt=''/>
                        <h3 className="text-3xl text-background">Define</h3>
                    </div>
                    <p className="text-background/[64%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex px-6 py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                    <Image priority src={two} alt=''/>
                        <h3 className="text-3xl text-background">Design</h3>
                    </div>
                    <p className="text-background/[64%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex px-6 py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                    <Image priority src={three} alt=''/>
                        <h3 className="text-3xl text-background">Refine</h3>
                    </div>
                    <p className="text-background/[64%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                    <Image priority src={flame} alt='' className="h-6"/>
                                </div>
                                <p className="text-background">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}