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
        <div className="flex flex-col bg-background">
            <div className="flex relative bg-looter bg-cover bg-center w-full h-[800px] py-16 px-6 md:px-32 items-end overflow-hidden">
                <div className="flex absolute bg-gradient-to-t from-background w-full h-full top-0 left-0"></div>
                <h1 className="z-[1]">Looter</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-20 px-6 md:px-32 py-20 pt-0">
                <div className="flex flex-col gap-6 w-6/12">
                    <p className="text-2xl font-extrabold text-primary leading-8">Decentralized Exchange with AMM and Game Theory</p>
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
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-6/12">
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
                <div className="flex gap-20 w-full">
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={one} alt='Challenge 1 - Create an engaging and intuitive DEX experience' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create an engaging and intuitive DEX experience for the Degen community?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Simplify the integration of AMM and game theory elements' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we simplify the integration of AMM and game theory elements into the user interface?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Develop a bold and distinctive visual identity' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we develop a bold and distinctive visual identity that resonates with the Degen community?</h3>
                    </div>
                </div>
            </div>
            <FooterNav hrefprev="/family" hrefnext="/trooper" previous="Family" next="Trooper" />
        </div>
    );
}