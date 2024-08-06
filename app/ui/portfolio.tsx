import Image from "next/image";
import arrow from "../../public/arrowshadow.svg";
import arrowstraight from "../../public/arrowstraight.svg";

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-0 justify-between items-center">
            <div className="flex flex-col gap-20 px-6 md:px-32 py-20 justify-between items-center">
                <h2 className="text-center">Previous design challenges</h2>
                <div className="flex gap-0 md:gap-16 items-center justify-center">
                    <Image priority src={arrow} alt='' className="h-10 md:h-16 w-auto" />
                    <Image priority src={arrow} alt='' className="scale-x-[-1] h-10 md:h-16 w-auto" />
                </div>
            </div>
            <div className="flex flex-wrap-reverse gap-20 px-6 md:px-32 py-20 items-center">
                <div className="flex min-w-[304px] sm:min-w-[480px] flex-1 flex-col gap-16 justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="leading-[40px]">Trooper: Blockchain Job Market for the Gaming Industry</h3>
                        <h4 className="leading-[28px] font-medium text-xl">How to create a blockchain-based job market platform specialized in the gaming sector, meeting specific user needs and ensuring transaction security?</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Objectives</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-placeholder leading-6">Develop a compelling visual identity and personify the project through a 3D mascot.</p>
                            <p className="text-placeholder leading-6">Provide a specialized platform catering specifically to the needs and dynamics of the gaming industry.</p>
                            <p className="text-placeholder leading-6">Streamline the creation of personalized profiles for each user, facilitating effective job market matching.</p>
                            <p className="text-placeholder leading-6">Establish trust through the escrow system, acting as an impartial third party to secure payments between users.</p>
                            <p className="text-placeholder leading-6">Introduce economic mechanisms inherent to the application and the use of the Trooper token.</p>
                        </div>
                    </div>
                </div>
                <div className="group flex sticky top-28 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[440px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-trooper bg-repeat bg-cover bg-center border-4 border-label shadow-lightXl w-full h-[800px]">
                    <div className="group-hover:bg-background/[16%] flex absolute bg-background/[64%] w-full h-full top-0 left-0 transition-all"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Trooper</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">branding</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">ux/ui design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">3D design</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full justify-between z-[2]">
                        <div className="flex flex-col gap-2">
                            <h5>Tools</h5>
                            <p className="text-placeholder">Figma - Blender</p>
                        </div>
                        <div className="flex">
                            <Image priority src={arrowstraight} alt='' className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-label flex-wrap gap-20 px-6 md:px-32 py-20 items-center">
                <div className="flex order-2 min-w-[304px] sm:min-w-[480px] flex-1 flex-col gap-16 justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-background leading-[40px]">Family: On-Chain Clothing Purchase and Sale</h3>
                        <h4 className="text-background leading-[28px] font-medium text-xl">How to create a system where purchasing, NFC-certified ownership, and resale on a secondary market seamlessly integrate?</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-background">Objectives</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-background/[64%] leading-6">Develop an application enabling users to acquire clothing collections, whether physical or in the form of NFTs, with a simplicity comparable to other online commerce platforms.</p>
                            <p className="text-background/[64%] leading-6">Establish an ecosystem where physical and digital fashion coexist seamlessly, providing users with a comprehensive experience.</p>
                            <p className="text-background/[64%] leading-6">Ensure a smooth integration of blockchain technology to certify clothing ownership, utilizing NFC tags and assigning NFTs without creating complex barriers for users.</p>
                            <p className="text-background/[64%] leading-6">Integrate a feature allowing users to resell their clothing items on a second-hand market directly within the application.</p>
                        </div>
                    </div>
                </div>
                <div className="group flex order-1 sticky top-28 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[440px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-family bg-repeat bg-cover bg-center border-4 border-background shadow-darkXl w-full h-[800px]">
                    <div className="group-hover:bg-background/[16%] flex absolute bg-background/[64%] w-full h-full top-0 left-0 transition-all"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Family</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">landing page design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">ux/ui design</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full justify-between z-[2]">
                        <div className="flex flex-col gap-2">
                            <h5>Tools</h5>
                            <p className="text-placeholder">Figma</p>
                        </div>
                        <div className="flex">
                            <Image priority src={arrowstraight} alt='' className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap-reverse gap-20 px-6 md:px-32 py-20 items-center">
                <div className="flex min-w-[304px] sm:min-w-[480px] flex-1 flex-col gap-16 justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="leading-[40px]">Looter: Decentralized Exchange with AMM and Game Theory</h3>
                        <h4 className="leading-[28px] font-medium text-xl">How to create a brand identity and visual experience that captivates the Degen community while integrating innovative economic mechanisms into a decentralized exchange.</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Objectives</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-placeholder leading-6">Develop a striking visual identity and personify the project through a 3D mascot.</p>
                            <p className="text-placeholder leading-6">Create an immersive user experience aligned with the culture and energy of the Degen community.</p>
                            <p className="text-placeholder leading-6">Generate interest from potential investors through a compelling and persuasive pitch deck.</p>
                            <p className="text-placeholder leading-6">Design social media banners aligned with the aesthetics and spirit of the brand identity and the Degen community.</p>
                        </div>
                    </div>
                </div>
                <div className="group flex sticky top-28 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[440px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-looter bg-repeat bg-cover bg-center border-4 border-label shadow-lightXl w-full h-[800px]">
                    <div className="group-hover:bg-background/[16%] flex absolute bg-background/[64%] w-full h-full top-0 left-0 transition-all"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Looter</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">branding design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">dapp design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">3D design</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full justify-between z-[2]">
                        <div className="flex flex-col gap-2">
                            <h5>Tools</h5>
                            <p className="text-placeholder">Figma - Blender - Marvelous Designer</p>
                        </div>
                        <div className="flex">
                            <Image priority src={arrowstraight} alt='' className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}