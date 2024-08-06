import BtnCallDark from "./btnCallDark";
import BtnSendDark from "./btnSendDark";

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col bg-label justify-center items-center px-6 py-20 gap-8">
            <h4 className="text-background">Want to work together?</h4>
            <div className="flex w-full md:max-w-[520px] flex-col md:flex-row items-center gap-6 justify-center md:justify-between">
                <div className="flex w-64 justify-end">
                <BtnCallDark text="Book a call"/>
                </div>
                <div className="flex w-64 justify-end">
                <BtnSendDark text="Chat with me"/>
                </div>
            </div>
        </div>
    );
}