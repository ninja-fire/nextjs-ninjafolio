import ninjapic from "../../public/ninjapic.png";
import Image from "next/image";
import flame from "../../public/flame.svg";

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
            <div className="flex flex-wrap w-full gap-16 items-center justify-center">
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col  w-full gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Ninja Fire</p>
                            <p className="text-background">Head of Design - Ninja Corp</p>
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
                        <p className="text-background/[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Ninja Fire</p>
                            <p className="text-background">Head of Design - Ninja Corp</p>
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
                        <p className="text-background/[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow flex-1 min-w-80 sm:min-w-96 flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <div className="flex items-center justify-center bg-primary border-2 border-background rounded-full shadow-darkSm w-content overflow-hidden">
                            <Image priority src={ninjapic} alt='' className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className="text-2xl leading-8 font-extrabold text-background">Ninja Fire</p>
                            <p className="text-background">Head of Design - Ninja Corp</p>
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
                        <p className="text-background/[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                        <div className="flex h-fit px-4 py-2 items-center justify-center rounded-full bg-label border-2 border-background shadow-darkSm">
                            <p className="text-2xl text-background">&rdquo;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}