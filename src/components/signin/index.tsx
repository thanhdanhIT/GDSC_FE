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
  FormErrLogIn,
  TextLogInFailBold,
  TextLogInFailNor,
  ErrLogIn
} from "./loginForm.style"
import { useEffect, useState } from "react";
import { useForm, SubmitHandler} from "react-hook-form"

interface Account {
    username: number,
    password: string
}

function FormLogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<Account>()
  const onSubmit: SubmitHandler<Account>  = (data: Account) => {
      console.log(JSON.stringify(data))
  }
  const [errorForm, setErrorForm] = useState(false)
  useEffect( () => {
    if (errors.username) {
        setErrorForm(true)
    }
  })

  return (
    <div>
        <BgBehide/>
        <FormSignIn>
            <Form/>
            <ImgForm/>


            <MainSignIn>
                <Welcome>Chào mừng bạn quay lại!</Welcome>

                {errorForm && <FormErrLogIn>
                    <ErrLogIn> 
                        <TextLogInFailBold>
                        Đăng nhập thất bại!
                        <TextLogInFailNor>Mã thành viên hoặc Mật khẩu không khớp!</TextLogInFailNor>
                        </TextLogInFailBold> 
                    </ErrLogIn>
                </FormErrLogIn> }
                

                <form onSubmit={handleSubmit(onSubmit)}>
                <FieldInput>
                    <CoverIDInput>
                        <TextIDMember >Mã thành viên*</TextIDMember>
                        <IDInput 
                        type="number" 
                        placeholder="username"
                        {...register("username", {
                            required: true,
                            minLength: 5,
                            maxLength: 7,
                        })}/>
                    </CoverIDInput>

                    <CoverPasswordInput>
                        <TextPassword>Mật khẩu*</TextPassword>
                        <PasswordInput 
                        type="password" 
                        placeholder="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                        })}/>
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
