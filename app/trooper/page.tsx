import Link from "next/link";
import Image from "next/image";
import arrowstraight from "../../public/arrowstraight.svg";
import FooterNav from "../ui/footerNav";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import trooper01 from "../../public/trooper/trooper01.webp";
import trooper02 from "../../public/trooper/trooper02.webp";
import trooper03 from "../../public/trooper/trooper03.webp";
import flame from "../../public/flame.svg";

export default function Trooper() {
    return (
        <div className="flex flex-col bg-background">
            <div className="flex relative bg-trooper bg-cover bg-center w-full h-[800px] py-16 px-6 md:px-32 items-end overflow-hidden">
                <div className="flex absolute bg-gradient-to-t from-background w-full h-full top-0 left-0"></div>
                <h1 className="z-[1]">Trooper</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-20 px-6 md:px-32 py-20 pt-0">
                <div className="flex w-full flex-col gap-6">
                    <h2 className="text-2xl font-extrabold text-primary leading-8">Blockchain Job Market for the Gaming Industry</h2>
                    <p className="text-placeholder text-sm font-normal leading-6">Trooper is a blockchain job market platform tailored for the gaming industry, aiming to connect gamers and developers with job opportunities in blockchain gaming. The project focuses on creating an engaging and intuitive user experience, incorporating a compelling visual identity and comprehensive job listings to meet the unique needs of the gaming community.</p>
                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">logo design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">branding</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">ux/ui design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">3D design</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-6">
                    <p className="text-2xl font-extrabold text-label leading-8">Objectives</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-caption leading-6">Develop a compelling visual identity and personify the project through a 3D mascot.</p>
                        <p className="text-caption leading-6">Provide a specialized platform catering specifically to the needs and dynamics of the gaming industry.</p>
                        <p className="text-caption leading-6">Streamline the creation of personalized profiles for each user, facilitating effective job market matching.</p>
                        <p className="text-caption leading-6">Establish trust through the escrow system, acting as an impartial third party to secure payments between users.</p>
                        <p className="text-caption leading-6">Introduce economic mechanisms inherent to the application and the use of the Trooper token.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-label w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="text-background">The challenges</h2>
                <div className="flex flex-wrap gap-20 w-full">
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={one} alt='Challenge 1 - Create an intuitive platform' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create an intuitive platform that seamlessly connects gamers and gaming professionals?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Implement a blockchain-based escrow system' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we implement a blockchain-based escrow system that ensures secure and efficient transactions?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Incorporate gamification elements that engage users' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we incorporate gamification elements that engage users and build trust within the community?</h3>
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
                <Image src={trooper01} alt="" className="flex w-full" />
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={trooper02} alt="" className="flex w-full" />
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={trooper03} alt="" className="flex w-full" />
            </div>
            <div className="flex h-20 bg-background"></div>
            <FooterNav hrefprev="/looter" hrefnext="/family" previous="Looter" next="Family" />
        </div>
    );
}