import Image from "next/image";
import FooterNav from "../ui/footerNav";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import fam01 from "../../public/family/fam01.svg";
import fam02 from "../../public/family/fam02.svg";
import fam03 from "../../public/family/fam03.svg";
import famdesignsystem from "../../public/family/famdesignsystem.svg";
import famlanding from "../../public/family/famlanding.svg";
import fammobile from "../../public/family/fammobile.png";

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
                <div className="flex flex-wrap gap-20 w-full">
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={one} alt='Challenge 1 - Integrate physical and digital fashion' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create a seamless user experience that merges traditional e-commerce functionalities with Web3 technologies?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Ensure NFC-certified ownership and blockchain transactions' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we ensure the smooth integration of RFID chip scanning within the buying and selling processes?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Create an engaging and secure secondary market' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we create an engaging and secure secondary market for clothing items?</h3>
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
                        <p className="text-background/[64%]">
                            The journey began with understanding the complex integration of digital NFTs with physical garments through RFID chips. We had to bridge traditional e-commerce functionalities with cutting-edge Web3 features. The challenge was to craft a user experience that could seamlessly guide users through scanning their RFID chips to link their clothes to the digital space, ensuring both the security and ease of use needed in a marketplace with both physical and digital assets. This phase was crucial to ensure every user interaction was intuitive and aligned with the unique demands of the project.
                        </p>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Design</h3>
                        </div>
                        <p className="text-background/[64%]">
                            In the design phase, we focused on creating a UI that was as familiar as a standard clothing marketplace but with the added layer of Web3 capabilities. The design had to be sleek and modern, offering users a straightforward yet engaging experience. We integrated features like a live chat similar to Vinted, allowing users to negotiate prices and discuss deliveries, all while ensuring that the RFID scanning process was clear and accessible. The design also included specific flows for selling and buying on the second-hand market, ensuring the chip scanning was seamlessly integrated into these processes.
                        </p>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Refine</h3>
                        </div>
                        <p className="text-background/[64%]">
                            Refinement was about perfecting the user experience. We rigorously tested the UI to ensure every scenario—from scanning a garment for the first time to transferring ownership on the second-hand market—was smooth and error-free. Feedback loops were crucial here; we worked closely with potential users to gather insights and make adjustments. The final product is a refined, user-centric application that merges the physical and digital worlds, providing a marketplace that feels both cutting-edge and user-friendly, ensuring that the complexities of the Family project are elegantly managed through design.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-background w-full gap-20 px-6 md:px-32 py-20">
                <h2 className=""><span className="text-primary">Interactive </span>Design Solutions</h2>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-16 py-6">
                        <div className="flex flex-col xl:flex-row gap-6 w-full">
                            <div className="flex w-full border-4 bg-gradient-to-b from-[#232323] to-[#0E0E0E] items-center justify-center border-label shadow-lightXl">
                                <Image src={fam01} alt="" />
                            </div>
                            <div className="flex w-full border-4 bg-gradient-to-b from-[#232323] to-[#0E0E0E] items-center justify-center border-label shadow-lightXl">
                                <Image src={fam02} alt="" />
                            </div>
                            <div className="flex w-full border-4 bg-gradient-to-b from-[#232323] to-[#0E0E0E] items-center justify-center border-label shadow-lightXl">
                                <Image src={fam03} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 xl:w-6/12">
                            <h3 className="text-3xl">RFID Scanning and Live Chat Integration</h3>
                            <div className="flex flex-col w-full">
                                <p className="text-placeholder">
                                    The RFID Scanning and Live Chat Integration seamlessly blend Web3 technology with a user-friendly experience. The RFID scanning feature allows users to link their physical garments to digital NFTs, ensuring authenticity and enabling easy management within the dApp. Coupled with a live chat feature, users can directly communicate during transactions, enhancing trust and simplifying negotiation processes. This integration makes the marketplace both innovative and practical, streamlining the buying and selling process with real-time communication and cutting-edge technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-20 h-full">
                    <div className="flex flex-col gap-16 py-6 h-full">
                        <div className="flex w-full bg-gradient-to-b from-[#232323] to-[#0E0E0E] items-center justify-center border-4 border-label shadow-lightXl">
                            <Image src={famdesignsystem} alt="" height={1080} width={1920} className="drop-shadow-4xl"/>
                        </div>
                        <div className="flex flex-col gap-6 xl:w-6/12">
                            <h3 className="text-3xl">Visual Branding Elements</h3>
                            <div className="flex flex-col w-full">
                                <p className="text-placeholder">
                                    The Visual Branding Elements of the Family project focus on creating a cohesive and recognizable identity that bridges the physical and digital realms. Utilizing a carefully crafted design system, the branding reflects the project&apos;s innovative spirit while maintaining user accessibility. From logos and typography to color schemes and iconography, each element was meticulously designed to resonate with both Web3 enthusiasts and mainstream users. This strong visual identity not only enhances brand recall but also contributes to a consistent and engaging user experience across all touchpoints.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-gradient-to-b from-[#232323] to-[#0E0E0E] relative w-full items-center justify-center overflow-hidden">
                <Image src={famlanding} alt="" className="flex w-full" />
            </div>
            <div className="flex bg-gradient-to-b from-[#232323] to-[#0E0E0E] relative w-full items-center justify-center overflow-hidden">
                <Image src={fammobile} alt="" className="flex w-full" />
            </div>

            <FooterNav hrefprev="/trooper" hrefnext="/looter" previous="Trooper" next="Looter" />
        </div>
    );
}