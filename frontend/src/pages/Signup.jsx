import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import { Submit } from "../components/Submit";

export function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                    <Heading label={"Signup"}/>
                    <SubHeading label={"Enter your information to create account."} />
                    <InputField label={"First Name"} placeholder={"John"} />
                    <InputField label={"Last Name"} placeholder={"Wick"} />
                    <InputField label={"Email"} placeholder={"Johnwick@gmail.com"} />
                    <InputField label={"Password"} placeholder={"Password"} />
                    <div className="pt-4">
                    <Submit label="Signup"/>
                    </div>
                    <BottomWarning label={"Already have an accout? " } to={'/signin'} btntext={'Sign in'} />
            </div>
        </div>
    </div>
}