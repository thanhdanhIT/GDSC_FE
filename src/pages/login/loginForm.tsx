import { BgBehide, 
        Form, 
        ImgForm,
        Welcome,
        MainSignIn,
        FieldInput,
        InputIDStudent,
        InputPassword,
        TextIDStudent,
        TextPassword,
        ForgotPassword,
        SignInButton,
        CreateNow,
} from "./loginForm.style"

function HandleFormLogIn() {
    return (
        <div>
            <BgBehide></BgBehide>
            <Form>
                <Welcome>Welcome back!</Welcome>

                <MainSignIn>
                    <FieldInput>
                        <TextIDStudent> ID Student</TextIDStudent>
                        <InputIDStudent/>
                        <TextPassword> Password</TextPassword>
                        <InputPassword />
                        <ForgotPassword>Forgot your password</ForgotPassword>
                    </FieldInput>  

                    <SignInButton>Sign In </SignInButton>

                    <CreateNow>
                        <p>Dont't have Account? 
                            <button className=" pl-2 font-medium text-green-500">
                                 Create now
                            </button>
                        </p>
                    </CreateNow>

                </MainSignIn>
                <ImgForm/>
            </Form>
        </div>
    )
}
export default HandleFormLogIn