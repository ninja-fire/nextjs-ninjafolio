import Link from "next/link";
import Image from "next/image";
import arrowstraight from "../../public/arrowstraight.svg";
import flame from "../../public/flame.svg";
import FooterNav from "../ui/footerNav";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";

export default function Looter() {
    return (
        // <div className="flex flex-col bg-background">
        //     <div className="flex flex-col bg-label w-full gap-20 px-6 md:px-32 py-20">
        //         <h2 className="text-background">The challenges</h2>
        //         <div className="flex gap-20 w-full">
        //             <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
        //                 <div className="flex">
        //                     <Image priority src={one} alt='Challenge 1 - Create an engaging and intuitive DEX experience' />
        //                 </div>
        //                 <h3 className="text-background text-[32px] leading-10">How might we create an engaging and intuitive DEX experience for the Degen community?</h3>
        //             </div>
        //             <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
        //                 <div className="flex">
        //                     <Image priority src={two} alt='Challenge 2 - Simplify the integration of AMM and game theory elements' />
        //                 </div>
        //                 <h3 className="text-background text-[32px] leading-10">How might we simplify the integration of AMM and game theory elements into the user interface?</h3>
        //             </div>
        //             <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
        //                 <div className="flex">
        //                     <Image priority src={three} alt='Challenge 3 - Develop a bold and distinctive visual identity' />
        //                 </div>
        //                 <h3 className="text-background text-[32px] leading-10">How might we develop a bold and distinctive visual identity that resonates with the Degen community?</h3>
        //             </div>
        //         </div>
        //     </div>
        //     <FooterNav hrefprev="/family" hrefnext="/trooper" previous="Family" next="Trooper" />
        // </div>
        <div className="flex flex-col bg-background">
            <div className="flex relative bg-looter bg-cover bg-center w-full h-[800px] py-16 px-6 md:px-32 items-end overflow-hidden">
                <div className="flex absolute bg-gradient-to-t from-background w-full h-full top-0 left-0"></div>
                <h1 className="z-[1]">Looter</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-20 px-6 md:px-32 py-20 pt-0">
                <div className="flex w-full flex-col gap-6">
                    <h2 className="text-2xl font-extrabold text-primary leading-8">Decentralized Exchange with AMM and Game Theory</h2>
                    <p className="text-placeholder text-sm font-normal leading-6">
                        Looter is a decentralized exchange platform designed for the Degen community, incorporating Automated Market Maker (AMM) functionality and game theory elements. The project aimed to create an engaging, immersive user experience and a strong visual identity that resonates with the unique culture of the Degen community.
                    </p>
                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">logo design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">branding</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">dapp design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">3D design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">pitch deck</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-6">
                    <p className="text-2xl font-extrabold text-label leading-8">Objectives</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-caption leading-6">Develop a striking visual identity and personify the project through a 3D mascot.</p>
                        <p className="text-caption leading-6">Create an immersive user experience aligned with the culture and energy of the Degen community.</p>
                        <p className="text-caption leading-6">Generate interest from potential investors through a compelling and persuasive pitch deck.</p>
                        <p className="text-caption leading-6">Design social media banners aligned with the aesthetics and spirit of the brand identity and the Degen community.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-label w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="text-background">The challenges</h2>
                <div className="flex flex-wrap gap-20 w-full">
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={one} alt='Challenge 1 - Create an engaging and intuitive DEX experience' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create an engaging and intuitive DEX experience for the Degen community?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Simplify the integration of AMM and game theory elements' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we simplify the integration of AMM and game theory elements into the user interface?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Develop a bold and distinctive visual identity' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we develop a bold and distinctive visual identity that resonates with the Degen community?</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-primary w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="text-background">The process</h2>
                <div className="flex flex-wrap gap-20 w-full">
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Define</h3>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Research</h4>
                                <p className="text-background">Conducted extensive research to understand the gaming and blockchain ecosystem, identifying key user needs and market gaps.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Strategic Planning</h4>
                                <p className="text-background">Developed a strategic plan outlining the project goals, target audience, and key milestones, ensuring alignment with the client&apos;s vision.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Insight Gathering</h4>
                                <p className="text-background">Collected insights from potential users and industry experts to inform the design direction and address specific user pain points.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Vision Alignment</h4>
                                <p className="text-background">Collaborated closely with the client to ensure the project vision aligns with their goals and the needs of their target audience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Design</h3>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">User Experience Optimization</h4>
                                <p className="text-background">Designed user flows and wireframes to optimize the user experience, ensuring seamless interactions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">User Interface Design</h4>
                                <p className="text-background">Crafted visually appealing and intuitive user interfaces that reflect the latest Web3 and blockchain design trends.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Incorporating Web3 Design Trends</h4>
                                <p className="text-background">Integrated current Web3 and blockchain design trends to ensure the platform stands out in a competitive market.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Refine</h3>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">User Testing and Feedback</h4>
                                <p className="text-background">Conducted user testing sessions to gather feedback on the initial designs, identifying areas for improvement.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Iterative Improvements</h4>
                                <p className="text-background">Implemented an iterative design process, refining the designs based on user feedback and testing results.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Polishing the Design</h4>
                                <p className="text-background">Focused on attention to detail to ensure a polished and professional final product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                {/* <Image src={trooper01} alt="" className="flex w-full" /> */}
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                {/* <Image src={trooper02} alt="" className="flex w-full" /> */}
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                {/* <Image src={trooper03} alt="" className="flex w-full" /> */}
            </div>
            <div className="flex h-20 bg-background"></div>
            <FooterNav hrefprev="/trooper" hrefnext="/family" previous="Trooper" next="Family" />
        </div>
    );
}