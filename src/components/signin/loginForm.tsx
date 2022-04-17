import { 
    BgBehide, 
    ImgForm,
    FormSignIn,
    Form,
    MainSignIn,
    FieldInput,
    Welcome,
    CoverIDInput,
    TextIDMember,
    IDInput,
    CoverPasswordInput,
    TextPassword,
    PasswordInput,
    ForgotPassword,
    SignInButton,
} from "./loginForm.style"

function HandleFormLogIn() {
    return (
        <div>
            <BgBehide/>
            <FormSignIn>
                <Form/>
                <ImgForm/>


                <MainSignIn>
                    <Welcome>Chào mừng bạn quay lại!</Welcome>

                    <FieldInput>
                        <CoverIDInput>
                            <TextIDMember>Mã thành viên*</TextIDMember>
                            <IDInput />
                        </CoverIDInput>

                        <CoverPasswordInput>
                            <TextPassword>Mật khẩu*</TextPassword>
                            <PasswordInput />
                        </CoverPasswordInput>

                        <ForgotPassword> Quên mật khẩu?</ForgotPassword>

                        <SignInButton>Sign in</SignInButton>
                    </FieldInput>


                </MainSignIn>

                
            </FormSignIn>   
        </div>
    )
}
export default HandleFormLogIn