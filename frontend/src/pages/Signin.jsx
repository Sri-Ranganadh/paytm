import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputField } from "../components/InputField"
import { SubHeading } from "../components/SubHeading"
import { Submit } from "../components/Submit"

export const Signin = () => {

    // return <div className="bg-slate-300 h-screen flex justify-center">
    //   <div className="flex flex-col justify-center">
    //       <div className="rounded-lg bg-white w-90 h-max px-4">
    //           <Heading label={"Sign in"}/>
    //           <SubHeading label={"Login using your credentials"} />
    //           <InputField label={"User Name"} placeholder={"abcd@mail.com"}/>
    //           <InputField label={"Password"} placeholder={"Password"}/>
    //           <div className="pt-4">
    //             <Submit label={"Sign in"} />
    //           </div>
    //           <BottomWarning label={"Don't have an accout?"} to={"/signup"} btntext={"sign up"}/>
    //       </div>
    //   </div>
    // </div>
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your credentials to login to your account."} />
                    <InputField label={"Email"} placeholder={"Johnwick@gmail.com"} />
                    <InputField label={"Password"} placeholder={"Password"} />
                    <div className="pt-4">
                    <Submit label="Signup"/>
                    </div>
                    <BottomWarning label={"Don't have an accout? " } to={'/signup'} btntext={'Sign up'} />
            </div>
        </div>
    </div>
}