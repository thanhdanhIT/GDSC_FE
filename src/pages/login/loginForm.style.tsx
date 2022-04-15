import styled from "styled-components";
import tw from "twin.macro";
import bgbehide from "../../assets/background/bg-login.png"
import bgimg2 from "../../assets/background/bg-loginForm.png"

export const BgBehide = styled.img.attrs({
    src: `${bgbehide}` })`
    ${tw`
    absolute
    max-w-[1920px]
    max-h-[1080px]
    left-1
    top-0
    `}
    filter: blur(10px);
 `;
 export const ImgForm = styled.img.attrs({
     src: `${bgimg2}` })`
     ${tw`
     absolute
     max-w-[600px]
     max-h-[700px]
     top-[50px]
     left-[650px]
     rounded-[15px]
    `}
 `;  

export const Form = styled.div`
    ${tw`
    absolute
    w-[1281px]
    h-[751px]
    left-[320px]
    rounded-[15px]
    bg-[#FFFFFF]
    `}
    top: calc(50% - 751px/2 - 0.5px);
    box-shadow: -5px -20px 200px -5px rgba(0, 0, 0, 0.2), 0px 0px 16px 4px rgba(0, 0, 0, 0.15);
`;  

export const MainSignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 400px;
    height: 395px;
    left: calc(50% - 400px/2 - 324px);
    top: calc(50% - 395px/2 + 30px);

`;
export const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 400px;
    height: 293px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 15px 0px;
`
export const SignInButton = styled.button`
    position: static;
    width: 400px;
    height: 48px;
    left: 0px;
    top: 308px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 15px 0px;
    background: #109D58;
    opacity: 0.8;
    border: 1px solid #109D58;
    box-sizing: border-box;
    border-radius: 10px;
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
    display: inline-block;

`

export const InputIDStudent = styled.input`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15%;
    bottom: 70%;
    background: rgba(16, 157, 88, 0.1);
    border-radius: 10px;
`;

export const InputPassword = styled.input`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 40%;
    bottom: 45%;
    background: rgba(16, 157, 88, 0.1);
    border-radius: 10px;
`;

export const ForgotPassword = styled.p`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 55%;
    bottom: 10%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    text-align: right;
    color: #707478;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 15px 0px;
`

export const TextIDStudent = styled.p`
    position: absolute;
    left: 0%;
    right: 79.28%;
    top: 0%;
    bottom: 78.76%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #707478;
`;

export const TextPassword = styled.p`
    position: absolute;
    left: 0%;
    right: 79.28%;
    top: 35%;
    bottom: 82.35%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #707478;
`

export const Welcome = styled.p`
    position: absolute;
    width: 335px;
    height: 100px;
    left: calc(50% - 400px/2 - 324px);
    top: 15%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    color: #109D58;
`