import styled from "styled-components";
import tw from "twin.macro"


export const FormSideBarLeft = styled.div`
    ${tw` 
    absolute
    top-0
    left-0
    bg-[#F9F9FB]
    w-[87px] 
    h-[1080px]
    shadow-lg
    `}   
`;

export const FormSideBarRight = styled.div`
    ${tw` 
    absolute
    bg-[#FFFFFF]
    w-[401px] 
    h-[1080px]
    shadow-lg
    z-[-10]
    `}
`;

export const Logo = styled.div`
    ${tw` 
    w-[46px]
    h-[46px]
    left-[21px]
    top-[20px]
    drop-shadow
    `}
`;