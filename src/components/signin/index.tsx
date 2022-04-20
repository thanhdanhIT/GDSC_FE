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
import Animation from "../AnimationLoading/index"
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  password: string;
}

function FormLogIn() {
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('userName is required')
      .min(5, 'Name length should be at least 5 characters'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'Password length should be at least 6 characters')
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm<FormValues>(validationOpt);
  const { errors } = formState;
  const [isLoading,setIsLoading] = useState(false)
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log('data', data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },2000)
  };
  return (
    <div>
      <BgBehide />
      <FormSignIn>
        <Form />
        <ImgForm />
        {/* asdasd */}
        <MainSignIn>
          <Welcome>Chào mừng bạn quay lại!</Welcome>
          {/* asdasd */}
          {/* {errorForm && (
            <FormErrLogIn>
              <ErrLogIn>
                <TextLogInFailBold>
                  Đăng nhập thất bại!
                  <TextLogInFailNor>Mã thành viên hoặc Mật khẩu không khớp!</TextLogInFailNor>
                </TextLogInFailBold>
              </ErrLogIn>
            </FormErrLogIn>
          )} */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldInput>
              <CoverIDInput>
                <TextIDMember>Mã thành viên*</TextIDMember>
                <IDInput type="number" placeholder="username" {...register('username')} />
                {errors.username ? <p>{errors.username?.message}</p> : ''}
              </CoverIDInput>

              <CoverPasswordInput>
                <TextPassword>Mật khẩu*</TextPassword>
                <PasswordInput type="password" placeholder="password" {...register('password')} />
                {errors.password ? <p>{errors.password?.message}</p> : ''}
              </CoverPasswordInput>

              <ForgotPassword> Quên mật khẩu?</ForgotPassword>
              <SignInButton type="submit">Sign in</SignInButton>
            </FieldInput>
          </form>
        </MainSignIn>
        {isLoading&&<Animation/>}
      </FormSignIn>
    </div>
  );
}
export default FormLogIn;