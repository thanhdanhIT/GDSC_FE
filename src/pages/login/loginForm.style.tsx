import styled from "styled-components";
import tw from "twin.macro";
import bgbehide from "../../assets/background/bg-login.png"
import bgimg2 from "../../assets/background/bg-loginForm.png"

export const BgBehide = styled.img.attrs({
  src: `${bgbehide}`
})`
  ${tw`absolute w-full inset-0 h-screen`}
  filter: blur(10px);
`;
 export const ImgForm = styled.img.attrs({
     src: `${bgimg2}` })`
     ${tw`
     max-w-[488px]
     max-h-[700px]
     rounded-[15px]
    `}
 `;  

export const Form = styled.div`
    ${tw`
    absolute
    flex
    items-center
    justify-around
    w-[1023px]
    h-[614px]
    rounded-[15px]
    bg-[#FFFFFF]
    `}
    box-shadow: -5px -20px 200px -5px rgba(0, 0, 0, 0.2), 0px 0px 16px 4px rgba(0, 0, 0, 0.15);
`;  

export const MainSignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 32px 0;
    width: 400px;
    height: 100%;
`;
export const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 0 0 0;
    position: static;
    width: 400px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 15px 0px 0px 0px;
`
export const SignInButton = styled.button`
  ${tw`w-[400px] h-[48px] left-[0px] top-[308px] my-[15px] static flex-none order-2`}
  background: #109d58;
  border: 1px solid #109d58;
  box-sizing: border-box;
  border-radius: 10px;
  color:#fff;
  transition : opacity 0.15s ease-in-out;
  &:hover{
    opacity:.8;
  }
`;

export const CreateNow = styled.div`
    position: static;
    width: 278px;
    height: 24px;
    left: 61px;
    top: 371px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 15px 0px;
    display: flex;
    font-size: 15px;

`

export const InputIDStudent = styled.input`
    background: rgba(16, 157, 88, 0.1);
    border-radius: 10px;
    padding:10px;
    width:100%
`;

export const InputPassword = styled.input`
  background: rgba(16, 157, 88, 0.1);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;

export const ForgotPassword = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-align: right;
  color: #707478;
  width:100%;
  margin: 15px 0 0 0;
  cursor:pointer;
`;

export const TextIDStudent = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #707478;
`;

export const TextPassword = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #707478;
`;

export const Welcome = styled.p`
  height: 100px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #109d58;
  text-align: left;
`;