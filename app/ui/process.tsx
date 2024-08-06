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
                        <Image priority src={one} alt='Step 1 - Define' />
                        <h3 className="text-3xl text-background">Define</h3>
                    </div>
                    <p className="text-background/[64%]">
                        In the Define phase, we focus on understanding your project&apos;s goals and requirements. We conduct thorough research and gather insights to establish a clear design direction, ensuring that the final product aligns with your vision and the needs of your target audience.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <p className="text-background">Comprehensive project research</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Strategy Icon' className="h-6" />
                            </div>
                            <p className="text-background">Strategic planning</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Insight Icon' className="h-6" />
                            </div>
                            <p className="text-background">Insight gathering</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Vision Icon' className="h-6" />
                            </div>
                            <p className="text-background">Vision alignment</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex px-6 py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                        <Image priority src={two} alt='Step 2 - Design' />
                        <h3 className="text-3xl text-background">Design</h3>
                    </div>
                    <p className="text-background/[64%]">
                        The Design phase is where creativity meets functionality. I craft user-centric interfaces that are not only visually appealing but also intuitive and seamless. By incorporating the latest trends in Web3 and blockchain design, I ensure your project stands out.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='UI Design Icon' className="h-6" />
                            </div>
                            <p className="text-background">User interface design</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='UX Design Icon' className="h-6" />
                            </div>
                            <p className="text-background">User experience optimization</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Trends Icon' className="h-6" />
                            </div>
                            <p className="text-background">Incorporating Web3 design trends</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Appeal Icon' className="h-6" />
                            </div>
                            <p className="text-background">Visually appealing interfaces</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex px-6 py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                        <Image priority src={three} alt='Step 3 - Refine' />
                        <h3 className="text-3xl text-background">Refine</h3>
                    </div>
                    <p className="text-background/[64%]">
                        In the Refine phase, we perfect the design based on feedback and testing. This iterative process ensures that the final product is polished, functional, and exceeds user expectations. Attention to detail and continuous improvement are key to delivering exceptional Web3 designs.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Testing Icon' className="h-6"/>
                            </div>
                            <p className="text-background">User testing and feedback</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Iteration Icon' className="h-6"/>
                            </div>
                            <p className="text-background">Iterative improvements</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Polish Icon' className="h-6"/>
                            </div>
                            <p className="text-background">Polishing the design</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                                <Image priority src={flame} alt='Exceed Icon' className="h-6"/>
                            </div>
                            <p className="text-background">Exceeding user expectations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}