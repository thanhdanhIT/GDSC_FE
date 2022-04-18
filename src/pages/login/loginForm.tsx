import {
  BgBehide,
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
  CreateNow
} from './loginForm.style';

function HandleFormLogIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BgBehide></BgBehide>
      <Form>
        <MainSignIn>
          <Welcome>Chào mừng bạn quay lại!</Welcome>
          <FieldInput>
            <TextIDStudent> Mã thành viên*</TextIDStudent>
            <InputIDStudent />
            <TextPassword>Mật khẩu*</TextPassword>
            <InputPassword />
            <ForgotPassword>Quên mật khẩu?</ForgotPassword>
          </FieldInput>
          <SignInButton>Sign In</SignInButton>
        </MainSignIn>
        <ImgForm />
      </Form>
    </div>
  );
}
export default HandleFormLogIn;
