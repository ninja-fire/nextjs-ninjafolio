import Link from "next/link";
import Image from "next/image";
import arrowstraight from "../../public/arrowstraight.svg";
import FooterNav from "../ui/footerNav";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";

export default function Family() {
    return (
        <div className="flex flex-col bg-background">
            <div className="flex relative bg-family bg-cover bg-center w-full h-[800px] py-16 px-6 md:px-32 items-end overflow-hidden">
                <div className="flex absolute bg-gradient-to-t from-background w-full h-full top-0 left-0"></div>
                <h1 className="z-[1]">Family</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-20 px-6 md:px-32 py-20 pt-0">
                <div className="flex flex-col gap-6 w-6/12">
                    <p className="text-2xl font-extrabold text-primary leading-8">On-Chain Clothing Purchase and Sale</p>
                    <p className="text-placeholder text-sm font-normal leading-6">
                        Family is an on-chain clothing purchase and sale platform, integrating NFC-certified ownership and secondary market resale. The project aimed to seamlessly combine physical and digital fashion, allowing users to acquire, own, and resell clothing items with blockchain technology, ensuring a smooth and intuitive experience similar to traditional online commerce platforms.
                    </p>
                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">landing page design</span>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4">
                            <span className="text-xs text-label font-medium">ux/ui design</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-6/12">
                    <p className="text-2xl font-extrabold text-label leading-8">Objectives</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-caption leading-6">Develop an application enabling users to acquire clothing collections, whether physical or in the form of NFTs, with a simplicity comparable to other online commerce platforms.</p>
                        <p className="text-caption leading-6">Establish an ecosystem where physical and digital fashion coexist seamlessly, providing users with a comprehensive experience.</p>
                        <p className="text-caption leading-6">Ensure a smooth integration of blockchain technology to certify clothing ownership, utilizing NFC tags and assigning NFTs without creating complex barriers for users.</p>
                        <p className="text-caption leading-6">Integrate a feature allowing users to resell their clothing items on a second-hand market directly within the application.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-label w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="text-background">The challenges</h2>
                <div className="flex gap-20 w-full">
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={one} alt='Challenge 1 - Integrate physical and digital fashion' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we integrate physical and digital fashion in a user-friendly manner?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Ensure NFC-certified ownership and blockchain transactions' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we ensure NFC-certified ownership and blockchain transactions are smooth and intuitive?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl w-full">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Create an engaging and secure secondary market' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create an engaging and secure secondary market for clothing items?</h3>
                    </div>
                </div>
            </div>
            <FooterNav hrefprev="/trooper" hrefnext="/looter" previous="Trooper" next="Looter" />
        </div>
    );
}