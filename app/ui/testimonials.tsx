import ninjapic from "../../public/ninjapic.png";
import Image from "next/image";
import flame from "../../public/flame.svg";
import dani from "../../public/testimonials/dani.png";
import madperps from "../../public/testimonials/madperps.png";
import marvin from "../../public/testimonials/marvin.png";

const breakLine =
    <svg className="w-full" width="463" height="7" viewBox="0 0 463 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2107_24680)">
            <path d="M0 1.5918H458.667" stroke="#151514" stroke-width="2" />
        </g>
        <defs>
            <filter id="filter0_d_2107_24680" x="0" y="0.591797" width="462.668" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0784314 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2107_24680" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2107_24680" result="shape" />
            </filter>
        </defs>
    </svg>


export default function Testimonials() {
    return (
        <div className="flex flex-col gap-16 px-6 md:px-32 py-20 bg-label items-center justify-center">
            <h2 className="text-background text-center">Don&apos;t trust, verify</h2>
            <div className="flex flex-wrap w-full gap-16 items-start justify-center">
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col  w-full gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={dani} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Daniel Dohne</p>
                            <p className="text-background">CEO - Aramid Labs</p>
                        </div>
                    </div>
                    <div className="flex px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                    </div>
                    <div className="flex w-full">
                        {breakLine}
                    </div>
                    <div className="flex w-full gap-6">
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&ldquo;</p>
                        </div>
                        <p className="text-background/[80%] text-sm leading-7">
                            Manon was amazing at understanding exactly what I wanted for Aramid.Finance. She worked quickly and efficiently, delivering a fantastic design ahead of schedule. Even after the project was completed, she was incredibly helpful, providing support and ensuring everything ran smoothly. Highly recommend!
                        </p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={madperps} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Mad Bear</p>
                            <p className="text-background">Founder - MadPerps</p>
                        </div>
                    </div>
                    <div className="flex px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                    </div>
                    {breakLine}
                    <div className="flex gap-6">
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&ldquo;</p>
                        </div>
                        <p className="text-background/[80%] text-sm leading-7">
                            Ninja Fire delivered exceptional branding for MadPerps. Her style, font choices, and color palette perfectly captured our vision for our perpetual futures DEX on Berachain. What impressed us most was her speed and accuracy - nailing it on the first try. While we&apos;re still in the early stages, the initial response to our branding has been overwhelmingly positive. Ninja Fire&apos;s work has given us a strong visual identity to build upon as we grow our community and partnerships.
                        </p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={marvin} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Marvin Scaringella</p>
                            <p className="text-background">CEO - VenaLabs</p>
                        </div>
                    </div>
                    <div className="flex px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                        <Image priority src={flame} alt='' className="h-6" />
                    </div>
                    {breakLine}
                    <div className="flex gap-6">
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&ldquo;</p>
                        </div>
                        <p className="text-background/[80%] text-sm leading-7">
                        Manon est une designer de talent avec qui nous avons eu le plaisir de travailler sur notre projet VenaLabs. Elle a su faire preuve d&apos;une grande initiative et d&apos;une créativité exceptionnelle, transformant nos idées en une réalité visuelle. C&apos;est rare de rencontrer une designer qui comprend aussi profondément les besoins de ses clients et qui y répond avec autant de brio. 
                        Merci Manon, tu as été formidable!
                        </p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}