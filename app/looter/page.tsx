import Image from "next/image";
import FooterNav from "../ui/footerNav";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import looterpitch from "../../public/looter/looter.webp";
import looterlogo from "../../public/looter/looterlogo.webp";
import looterswap from "../../public/looter/looterswap.webp";
import looterlanding from "../../public/looter/looter03.webp";
import looterlogoanimated from "../../public/looter/logoanimated.gif";
import cardanimated from "../../public/looter/cardanimated.gif";
import btnanimated from "../../public/looter/btnanimated.gif";
import key from "../../public/looter/keygif.gif";
import chest540 from "../../public/looter/chest540.gif";
import looterblur from "../../public/looter/looterblur.png";
import step1 from "../../public/looter/step1.png";
import step2 from "../../public/looter/step2.png";
import step3 from "../../public/looter/step3.png";

export default function Looter() {
    return (
        <div className="flex flex-col bg-background">
            <div className="flex relative bg-looter bg-cover bg-center w-full h-[800px] py-16 px-6 md:px-32 items-end overflow-hidden">
                <div className="flex absolute bg-gradient-to-t from-background w-full h-full top-0 left-0"></div>
                <h1 className="z-[1]">Looter</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-20 px-6 md:px-32 py-20 pt-0">
                <div className="flex w-full flex-col gap-6">
                    <h2 className="text-2xl font-extrabold text-primary leading-8">A Deflationist, Strategy-Oriented DEX AMM</h2>
                    <p className="text-placeholder text-sm font-normal leading-6">
                        Looter is a cutting-edge decentralized exchange (DEX) with a deflationary tokenomics model designed for the adventurous. Looter combines elements of finance and gaming, enabling users to develop yield strategies, participate in liquidity mining, and compete for valuable rewards. The project’s unique branding, 3D assets, and seamless user experience make it a standout in the world of blockchain-based decentralized finance.
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
                        <h3 className="text-background text-[32px] leading-10">How might we make complex tokenomics clear and engaging?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={two} alt='Challenge 2 - Simplify the integration of AMM and game theory elements' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we design a visual identity that&apos;s both sophisticated and appealing?</h3>
                    </div>
                    <div className="flex flex-col p-8 gap-4 bg-primary border-4 border-background shadow-darkXl grow flex-1 min-w-80 sm:min-w-96">
                        <div className="flex">
                            <Image priority src={three} alt='Challenge 3 - Develop a bold and distinctive visual identity' />
                        </div>
                        <h3 className="text-background text-[32px] leading-10">How might we integrate gamification seamlessly into the user experience?</h3>
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
                            The journey began with a deep dive into understanding the core problems facing the crypto and DeFi space—where user needs were unmet, and retention was low. We defined our mission to create a strategy-oriented DEX AMM that not only addresses these issues but also introduces innovative gamification elements. Through extensive research and user interviews, we identified the key challenges: clarity in tokenomics, the need for an engaging visual identity, and the seamless integration of game mechanics.
                        </p>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Design</h3>
                        </div>
                        <p className="text-background/[64%]">
                            Armed with these insights, we started crafting a design that would not only meet but exceed user expectations. The branding was designed to reflect both sophistication and accessibility, using neon and cyberpunk aesthetics to create a unique identity. We also focused on making the complex tokenomics easy to understand through intuitive UI elements and clear visual cues. Our goal was to ensure that users could easily navigate the platform while enjoying a gamified experience that kept them engaged.
                        </p>
                    </div>
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Refine</h3>
                        </div>
                        <p className="text-background/[64%]">
                            With the initial designs in place, we moved into the refinement phase. We conducted multiple rounds of user testing to gather feedback on the usability and overall experience. Iterative design sessions allowed us to fine-tune every detail, from the color scheme to the interactive elements. We made adjustments based on user behavior and feedback, ensuring that the final product was not only functional but also enjoyable. The result was a polished platform that successfully balances strategy, engagement, and visual appeal.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-background w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="">Main project <span className="text-primary">highlights</span></h2>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-16 py-6">
                        <div className="flex flex-col xl:flex-row gap-6 w-full">
                            <div className="flex w-full border-4 border-label shadow-lightXl">
                                <Image src={step1} alt="" className="flex w-full" />
                            </div>
                            <div className="flex w-full border-4 border-label shadow-lightXl">
                                <Image src={step2} alt="" className="flex w-full" />
                            </div>
                            <div className="flex w-full border-4 border-label shadow-lightXl">
                                <Image src={step3} alt="" className="flex w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 xl:w-6/12">
                            <h3 className="text-3xl">Guided Swapping Experience with Integrated Notifications</h3>
                            <div className="flex flex-col w-full">
                                <p className="text-placeholder">
                                    In the Looter project, we designed a step-by-step UI that guides users seamlessly through the swapping process, paired with a real-time notification system. This feature ensures users are not confined to the swapping interface and can engage with other app features concurrently. Notifications serve to inform users of the transaction status without interrupting their overall app experience, allowing them to multitask efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-16 py-6">
                        <div className="flex flex-col xl:flex-row gap-6 w-full">
                            <div className="flex w-full border-4 items-center justify-center border-label shadow-lightXl">
                                <Image src={looterlogoanimated} alt="" unoptimized />
                            </div>
                            <div className="flex w-full border-4 items-center justify-center border-label shadow-lightXl">
                                <Image src={cardanimated} alt="" unoptimized />
                            </div>
                            <div className="flex w-full border-4 items-center justify-center border-label shadow-lightXl">
                                <Image src={btnanimated} alt="" unoptimized />

                            </div>
                        </div>
                        <div className="flex flex-col gap-6 xl:w-6/12">
                            <h3 className="text-3xl">Dynamic UI Interactions and Branding</h3>
                            <div className="flex flex-col w-full">
                                <p className="text-placeholder">
                                The Looter app&apos;s dynamic UI elements are crafted to captivate users and make the experience unforgettable. The &quot;Open App&quot; button&apos;s fluid animation and the interactive &quot;LOOT / ETH&quot; card draw users in, signaling both engagement and ease of use. The animated Looter logo serves as a strong branding tool, making the app instantly recognizable and memorable. These design elements not only enhance user interaction but also make the app stand out on social media, attracting attention and encouraging user retention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-16 py-6">
                        <div className="flex flex-col xl:flex-row gap-6 w-full">
                            <div className="flex w-full items-center justify-center border-4 border-label shadow-lightXl">
                                <Image src={key} alt="" unoptimized className="scale-90" />
                            </div>
                            <div className="flex w-full items-center justify-center border-4 border-label shadow-lightXl overflow-hidden">
                                <Image src={chest540} unoptimized alt="" />
                            </div>
                            <div className="flex w-full items-center justify-center border-4 border-label shadow-lightXl overflow-hidden">
                                <Image src={looterblur} unoptimized alt="" />

                            </div>
                        </div>
                        <div className="flex flex-col gap-6 xl:w-6/12">
                            <h3 className="text-3xl">Immersive 3D Elements</h3>
                            <div className="flex flex-col w-full">
                                <p className="text-placeholder">
                                The Looter project embodies the essence of Web3 innovation, combining cutting-edge design with a deep understanding of the blockchain community. The first visual element, a glowing green cube adorned with circuit-like patterns, symbolizes the core technology and decentralized structure that forms the backbone of the Looter ecosystem. The second illustration presents a dynamic, intricate object that visually represents the cryptographic keys essential to security and access within the platform. Finally, the third design—a futuristic figure donning a hoodie and augmented reality goggles—captures the spirit of the user base: tech-savvy, forward-thinking, and deeply engaged in the digital frontier. Together, these visuals encapsulate the Looter project&apos;s commitment to blending aesthetic appeal with functional, user-centric design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={looterpitch} alt="" className="flex w-full" />
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={looterlogo} alt="" className="flex w-full" />
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={looterlanding} alt="" className="flex w-full" />
            </div>
            <div className="flex relative w-full items-center justify-center overflow-hidden">
                <Image src={looterswap} alt="" className="flex w-full" />
            </div>
            <div className="flex h-20 bg-background"></div>
            <FooterNav hrefprev="/family" hrefnext="/trooper" previous="Family" next="Trooper" />
        </div>
    );
}