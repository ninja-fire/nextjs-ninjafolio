import Link from "next/link";
import Image from "next/image";
import arrowstraight from "../../public/arrowstraight.svg";
import FooterNav from "../ui/footerNav";



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
                    <p className="text-placeholder text-sm font-normal leading-6">Trooper is a blockchain job market platform tailored for the gaming industry, aiming to connect gamers and developers with job opportunities in blockchain gaming. The project focuses on creating an engaging and intuitive user experience, incorporating a compelling visual identity and comprehensive job listings to meet the unique needs of the gaming community.</p>
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
            <FooterNav hrefprev="/trooper" hrefnext="/looter" previous="Trooper" next="Looter" />
        </div>
    );
}