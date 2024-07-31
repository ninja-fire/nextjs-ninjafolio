import BtnCallDark from "./btnCallDark";
import BtnSendDark from "./btnSendDark";

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col bg-primary justify-center items-center px-6 py-20 gap-8">
            <h4 className="text-background">Want to work together?</h4>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex min-w-max max-w-max w-60">
                <BtnCallDark text="Book a call"/>
                </div>
                <div className="flex min-w-max max-w-max w-60">
                <BtnSendDark text="Chat with me"/>
                </div>
            </div>
        </div>
    );
}