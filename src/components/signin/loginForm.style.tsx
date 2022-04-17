import styled from "styled-components";
import tw from "twin.macro";
import bgbehide from "../../assets/background/bg-login.png"
import bgimg2 from "../../assets/background/bg-loginForm.png"

export const BgBehide = styled.img.attrs({
    src: `${bgbehide}` })`
    ${tw`
    absolute
    w-[1536px]
    h-[864px]
    left-0
    top-0
    `}
    filter: blur(10px);
 `;

export const ImgForm = styled.img.attrs({
     src: `${bgimg2}` })`
     ${tw`
     absolute
     w-[488px]
     h-[594px]
     top-[1.63%]
     bottom-[1.63%]
     left-[51.32%]
     right-[0.98%]
     rounded-[15px]
    `}
 `;  

//Group 67 
export const FormSignIn = styled.div` 
    ${tw`
    absolute
    w-[1023px]
    h-[614px]
    left-[257px]
    top-[125px]
    `}
`;

// Rectangle 32
export const Form = styled.div`
    ${tw`
    absolute
    left-[0%]
    right-[0%]
    top-[0%]
    bottom-[0%]
    bg-[#FFFFFF]
    rounded-[15px]
    `}
    box-shadow: -5px -20px 200px -5px rgba(0, 0, 0, 0.2), 0px 0px 16px 4px rgba(0, 0, 0, 0.15);
`;

// Frame 60
export const MainSignIn = styled.div`
    ${tw`
        flex
        flex-col
        items-start	
        p-0
        absolute
        w-[434px]
        h-[500px]
        left-[46px]
        top-[30px]
    `}
`

// Frame 59 
export const FieldInput = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-end
        p-0
        static
        w-[434px]
        h-[267px]
        mt-[39px]
    `}
`

// Welcome
export const Welcome = styled.p`
    ${tw`
        static
        left-[0%]
        right-[28.8%]
        top-[0%]
        bottom-[75.37%]
        w-[309px]
        h-[100px]
        not-italic
        font-bold
        leading-[50px]
        text-[#109D58]
    `}
    font-family: 'Be Vietnam';
    font-size: 40px;
`

// Group 65 
export const CoverIDInput = styled.div`
    ${tw`
        static
        left-[0%]
        right-[0%]
        top-[0%]
        bottom-[71.54%]
        w-[434px]
        h-[76px]
        flex-none
        order-1
        mt-[15px]
    `}
    flex-grow: 0;
`

export const TextIDMember = styled.p` 
    ${tw` 
        static
        left-[0%]
        right-[72.68%]
        top-[0%]
        bottom-[92.51%]
        w-[118.57px]
        h-[20px]
        not-italic
        font-semibold
        leading-[20px]
        text-[#707478]
        flex
        flex-none
        items-center
        order-1
    `}
    font-family: 'Be Vietnam';
    font-size: 14px;
    flex-grow: 0;
`

// Rectangle 4
export const IDInput = styled.input.attrs(props => ({
    type: "text",
  }))` 
  ${tw` 
      static
      left-[0%]
      right-[0%]
      top-[9.74%]
      bottom-[71.54%]
      w-[434px]
      h-[50px]
      bg-[rgba(112, 116, 120, 0.1)]
      box-border
      rounded-[10px]
      flex-none
      order-1
      p-2
  `}
  border: 1px solid rgba(112, 116, 120, 0.1);
  flex-grow: 0;   
`

//Group 66
export const CoverPasswordInput = styled.div` 
    ${tw` 
        static
        left-[0%]
        right-[0%]
        top-[0%]
        bottom-[37.83%]
        w-[434px]
        h-[76px]
        flex-none
        order-1
        mt-[15px]
    `}
`

export const TextPassword = styled.p`
    ${tw` 
        static
        left-[0%]
        right-[81.43%]
        top-[34.08%]
        bottom-[58.43%]
        not-italic
        font-semibold
        leading-[20px]
        flex
        items-center
        text-[#707478]
        flex-none
        order-1

    `}
    font-family: 'Be Vietnam';
    font-size: 14px;
    flex-grow: 0;
`

export const PasswordInput = styled.input.attrs(props => ({
    type: "password",
  }))`
  ${tw` 
      static
      left-[0%]
      right-[0%]
      top-[43.45%]
      bottom-[37.83%]
      w-[434px]
      h-[50px]
      bg-[rgba(112, 116, 120, 0.1)]
      rounded-[10px]
      flex-none
      order-1
      p-2
  `}
  flex-grow: 0;
`

// Forgot password
export const ForgotPassword = styled.p`
    ${tw` 
        static
        left-[70.74%]
        right-[0%]
        top-[67.79%]
        bottom-[23.6%]
        w-[127px]
        h-[23px]
        not-italic
        font-semibold
        leading-[20px]
        text-right
        text-[#707478]
        flex-none
        order-1
        mt-[15px]
    `}
    font-family: 'Be Vietnam';
    flex-grow: 0;
` 
//Login Button
export const SignInButton = styled.button` 
    ${tw` 
        static
        left-[0%]
        right-[0%]
        top-[82.02%]
        bottom-[0%]
        w-[434px]
        h-[48px]
        not-italic
        font-normal
        flex-none
        leading-[27px]
        text-center
        text-[#FFFFFF]
        flex-none
        order-1
        mt-[15px]
        bg-[rgba(16, 157, 88, 0.8)]
        rounded-[10px]
    `}
    flex-grow: 0;
    font-family: 'Be Vietnam';
    font-size: 18px;
`
