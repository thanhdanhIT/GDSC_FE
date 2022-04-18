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
import { useState } from "react";


function FormLogIn() {
  return (
    <div>
        <BgBehide/>
        <FormSignIn>
            <Form/>
            <ImgForm/>


            <MainSignIn>
                <Welcome>Chào mừng bạn quay lại!</Welcome>


                <form>
                <FieldInput>
                    <CoverIDInput>
                        <TextIDMember >Mã thành viên*</TextIDMember>
                        <IDInput 
                        name="username"
                        type="text" 
                        placeholder="username"/>
                    </CoverIDInput>

                    <CoverPasswordInput>
                        <TextPassword>Mật khẩu*</TextPassword>
                        <PasswordInput 
                        name="password"
                        type="text" 
                        placeholder="password"/>
                    </CoverPasswordInput>

                    <ForgotPassword> Quên mật khẩu?</ForgotPassword>

                    <SignInButton type="submit">Sign in</SignInButton>
                </FieldInput>
                </form>

            </MainSignIn>

            
        </FormSignIn>   
    </div>
)
}

export default FormLogIn;
