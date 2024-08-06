import BtnCallYellow from "./btnCallYellow";
import BtnCallDark from "./btnCallDark";

export default function Cta() {
    return (
        <div className="flex flex-col bg-primary justify-center items-center px-6 py-20 gap-8">
            <h4 className="text-background">Not convinced yet?</h4>
            <BtnCallDark text="Book your free intro call"/>
            <p className="text-background/[64%] text-center w-80">Book a 30 minutes introduction call with me to discuss about your needs and define your next steps.</p>
        </div>
    );
}