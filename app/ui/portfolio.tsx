import Image from "next/image";
import arrow from "../../public/arrowshadow.svg";
import arrowstraight from "../../public/arrowstraight.svg";
import flame from "../../public/flame.svg";

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
                        <h3 className="leading-[48px]">Job Market Blockchain pour l&apos;Industrie du Gaming</h3>
                        <h4 className="leading-[32px] font-medium text-xl">Comment créer une plateforme de job market basée sur la blockchain, spécialisée dans le secteur du gaming, qui répond aux besoins spécifiques des utilisateurs et assure la sécurité des transactions?</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Objectifs</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-placeholder leading-6">Créer une identité visuelle percutante et personnifier le projet à travers une mascotte 3D.</p>
                            <p className="text-placeholder leading-6">Fournir une plateforme spécialisée qui répond spécifiquement aux besoins et aux dynamiques de l&apos;industrie du gaming.</p>
                            <p className="text-placeholder leading-6">Faciliter au maximum la création d&apos;un profil personnalisé pour chaque utilisateur permettant un matching efficace sur le marché de l&apos;emploi.</p>
                            <p className="text-placeholder leading-6">Instaurer la confiance grâce au système d&apos;escrow, agissant comme un tiers de confiance impartial pour sécuriser les paiements entre utilisateurs.</p>
                            <p className="text-placeholder leading-6">Introduire les mécanisme économiques inhérents à l&apos;application et à l&apos;utilisation du token Trooper.</p>
                        </div>
                    </div>
                </div>
                <div className="flex sticky top-32 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[480px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-trooper bg-repeat bg-cover bg-center border-4 border-label shadow-lightXl w-full h-[800px]">
                    <div className="flex absolute bg-background/[64%] w-full h-full top-0 left-0"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Trooper</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
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
                        <h3 className="text-background leading-[48px]">Job Market Blockchain pour l&apos;Industrie du Gaming</h3>
                        <h4 className="text-background leading-[32px] font-medium text-xl">Comment créer une plateforme de job market basée sur la blockchain, spécialisée dans le secteur du gaming, qui répond aux besoins spécifiques des utilisateurs et assure la sécurité des transactions?</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-background">Objectifs</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-background leading-6">Créer une identité visuelle percutante et personnifier le projet à travers une mascotte 3D.</p>
                            <p className="text-background leading-6">Fournir une plateforme spécialisée qui répond spécifiquement aux besoins et aux dynamiques de l&apos;industrie du gaming.</p>
                            <p className="text-background leading-6">Faciliter au maximum la création d&apos;un profil personnalisé pour chaque utilisateur permettant un matching efficace sur le marché de l&apos;emploi.</p>
                            <p className="text-background leading-6">Instaurer la confiance grâce au système d&apos;escrow, agissant comme un tiers de confiance impartial pour sécuriser les paiements entre utilisateurs.</p>
                            <p className="text-background leading-6">Introduire les mécanisme économiques inhérents à l&apos;application et à l&apos;utilisation du token Trooper.</p>
                        </div>
                    </div>
                </div>
                <div className="flex order-1 sticky top-32 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[480px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-trooper bg-repeat bg-cover bg-center border-4 border-background shadow-darkXl w-full h-[800px]">
                    <div className="flex absolute bg-background/[64%] w-full h-full top-0 left-0"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Trooper</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
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
            <div className="flex flex-wrap-reverse gap-20 px-6 md:px-32 py-20 items-center">
                <div className="flex min-w-[304px] sm:min-w-[480px] flex-1 flex-col gap-16 justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="leading-[48px]">Job Market Blockchain pour l&apos;Industrie du Gaming</h3>
                        <h4 className="leading-[32px] font-medium text-xl">Comment créer une plateforme de job market basée sur la blockchain, spécialisée dans le secteur du gaming, qui répond aux besoins spécifiques des utilisateurs et assure la sécurité des transactions?</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Objectifs</h5>
                        <div className="flex flex-col gap-2">
                            <p className="text-placeholder leading-6">Créer une identité visuelle percutante et personnifier le projet à travers une mascotte 3D.</p>
                            <p className="text-placeholder leading-6">Fournir une plateforme spécialisée qui répond spécifiquement aux besoins et aux dynamiques de l&apos;industrie du gaming.</p>
                            <p className="text-placeholder leading-6">Faciliter au maximum la création d&apos;un profil personnalisé pour chaque utilisateur permettant un matching efficace sur le marché de l&apos;emploi.</p>
                            <p className="text-placeholder leading-6">Instaurer la confiance grâce au système d&apos;escrow, agissant comme un tiers de confiance impartial pour sécuriser les paiements entre utilisateurs.</p>
                            <p className="text-placeholder leading-6">Introduire les mécanisme économiques inhérents à l&apos;application et à l&apos;utilisation du token Trooper.</p>
                        </div>
                    </div>
                </div>
                <div className="flex sticky top-32 min-w-[304px] sm:min-w-[480px] flex-1 max-h-[480px] xl:max-h-none relative flex-col justify-between px-8 py-8 bg-trooper bg-repeat bg-cover bg-center border-4 border-label shadow-lightXl w-full h-[800px]">
                    <div className="flex absolute bg-background/[64%] w-full h-full top-0 left-0"></div>
                    <div className="flex flex-col gap-6">
                        <h3 className="leading-[48px] z-[2]">Trooper</h3>
                        <div className="flex flex-wrap gap-6 w-full z-[2]">
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-background border-2 border-label shadow-primarySm px-2 py-1 left-4 top-4 z-[2]">
                                <span className="text-xs text-label font-medium">logo design</span>
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
        </div>
    );
}