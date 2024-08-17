import Image from "next/image";
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
                <div className="flex flex-col gap-20 w-full">
                    <div className="flex flex-col grow flex-1 min-w-80 sm:min-w-96 gap-8">
                        <div className="flex px-[52px] py-4 gap-4 rounded-full bg-label border-4 border-background shadow-darkXl items-center w-fit">
                            <h3 className="text-3xl text-background">Define</h3>
                        </div>
                        <p className="text-background/[64%]">
                            Trooper began as an ambitious idea to revolutionize the gaming job market by connecting gamers and game developers within the blockchain ecosystem. The project&apos;s mission was to create a platform where gamers could find professional opportunities in the emerging &quot;play to earn&quot; market, while companies could find and hire skilled players and developers. The challenges were clear:
                        </p>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Branding</h4>
                                <p className="text-background">
                                    Establish a unique, captivating brand identity.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">User Profiles</h4>
                                <p className="text-background">
                                    Create comprehensive profiles for gamers and professionals.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Job Listings</h4>
                                <p className="text-background">
                                    Design a seamless job posting and application system.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Escrow System</h4>
                                <p className="text-background">
                                    Develop a secure blockchain-based escrow system for payments.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Gamification</h4>
                                <p className="text-background">
                                    Implement a gamified reputation system to build trust and engagement.
                                </p>
                            </div>
                        </div>
                        <p className="text-background/[64%]">
                            To tackle these challenges, we started with comprehensive research and strategic planning. We dived deep into understanding the target audience&apos;s needs, the competitive landscape, and the latest trends in blockchain gaming and professional gaming markets. Workshops and brainstorming sessions with stakeholders ensured that we aligned our vision with the project&apos;s goals.
                        </p>
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
                                <h4 className="text-xl text-background">Branding</h4>
                                <p className="text-background">
                                    The first step was crafting a brand identity that resonated with both gamers and professionals. We opted for a bold and futuristic theme, reflecting the innovative nature of blockchain technology and the excitement of gaming. The logo, typography, and color scheme were carefully chosen to create a strong, memorable brand.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">User Profiles</h4>
                                <p className="text-background">
                                    Next, we designed user profiles that allowed gamers to showcase their skills, experiences, and achievements. These profiles included features like skill badges, past project highlights, and integration with gaming platforms to verify achievements and in-game rewards.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Job Listings</h4>
                                <p className="text-background">
                                    We designed a user-friendly job posting system where companies could easily list opportunities and gamers could search and apply for jobs. The interface was optimized for ease of use, with filters and search functions to help users find relevant listings quickly.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Escrow System</h4>
                                <p className="text-background">
                                    A key feature of Trooper was the blockchain-based escrow system. We designed a secure escrow mechanism where companies would lock funds into a smart contract when posting a job. This not only ensured payment security but also allowed Trooper to stake these funds and earn interest, providing additional value to companies.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Gamification</h4>
                                <p className="text-background">
                                    To enhance user engagement and build trust, we implemented a gamified reputation system. Users could earn badges and XP points for completing jobs and receiving positive feedback. This system provided a clear, visual representation of a user&apos;s reliability and expertise.
                                </p>
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
                                <p className="text-background">
                                    We conducted multiple rounds of user testing to gather feedback on the platform&apos;s usability and design. This feedback was invaluable in identifying areas for improvement and ensuring the platform met user expectations.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Iterative Improvements</h4>
                                <p className="text-background">
                                    Based on the feedback, we made iterative improvements to the platform. This included refining the user interface, enhancing the search and filter functions, and improving the overall user experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex px-1 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm h-fit">
                                <Image priority src={flame} alt='Research Icon' className="h-6" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-background">Polishing the Design</h4>
                                <p className="text-background">
                                    Attention to detail was key in the final stages. We polished the design, ensuring consistency across all elements and optimizing the platform for performance and speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-background w-full gap-20 px-6 md:px-32 py-20">
                <h2 className="">Main <span className="text-primary">problems</span> and <span className="text-primary">solutions</span></h2>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col xl:flex-row items-center gap-16 py-6">
                        <div className="flex bg-trooperP1 bg-center bg-cover w-full h-[640px] border-4 border-label shadow-lightXl"></div>
                        <div className="flex flex-col gap-6 w-full">
                            <h3 className="text-3xl">Difficulty in Filtering Applications for Multiple Player Missions</h3>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Issue</h4>
                                <p className="text-placeholder">
                                    Companies posting job offers to hire multiple players for a mission found it challenging to filter applications effectively. The existing XP and badges system was not clear enough to differentiate between applicants.
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Solution</h4>
                                <p className="text-placeholder">
                                    We implemented a detailed review system with comments for each player. This allowed companies to read feedback from other employers, providing clearer insights into each applicant&quot;s past performance and reliability. We also enhanced the badges system to display specific skills and achievements more prominently.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row items-center gap-16 py-6">
                        <div className="flex order-2 xl:order-1 flex-col gap-6 w-full">
                            <h3 className="text-3xl">Low Job Visibility and Engagement</h3>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Issue</h4>
                                <p className="text-placeholder">
                                    Users were concerned that the new platform might struggle to attract gamers to apply for their jobs, resulting in lower engagement.
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Solution</h4>
                                <p className="text-placeholder">
                                    We added a feature that allows users to share job posts on social media platforms directly from the app. This not only increased visibility but also drove more traffic to the job listings, ensuring that opportunities reached a wider audience quickly.
                                </p>
                            </div>

                        </div>
                        <div className="flex bg-trooperP2 order-1 xl:order-2 bg-center bg-cover w-full h-[640px] border-4 border-label shadow-lightXl"></div>
                    </div>
                    <div className="flex flex-col xl:flex-row items-center gap-16 py-6">
                        <div className="flex bg-trooperP3 bg-center bg-cover w-full h-[640px] border-4 border-label shadow-lightXl"></div>
                        <div className="flex flex-col gap-6 w-full">
                            <h3 className="text-3xl">Lack of a Comprehensive Search Feature</h3>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Issue</h4>
                                <p className="text-placeholder">
                                    Users expressed a need for a feature that would allow them to search across the entire app for gamers, guilds, and job listings. The absence of a unified search functionality made it cumbersome for users to find specific profiles or opportunities efficiently.
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-xl text-label">Solution</h4>
                                <p className="text-placeholder">
                                    We developed and integrated a robust search engine that spans the entire platform. This feature includes advanced filtering options, enabling users to refine their search by specific criteria such as skills, game genres, job types, and guild specializations. The search results page was designed to display relevant matches from all categories—gamers, guilds, and jobs—in a single, easy-to-navigate interface. This enhancement significantly improved user experience by making it simpler and faster to locate the desired information within the app.
                                </p>
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
            <FooterNav hrefprev="/looter" hrefnext="/family" previous="Looter" next="Family" />
        </div>
    );
}