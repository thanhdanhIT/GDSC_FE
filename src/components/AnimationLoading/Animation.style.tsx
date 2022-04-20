import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
const clr1 = '#2276E6;';
const clr3 = '#F3BA1D';
const clr5 = '#E74435;';
const clr6 = '#109D58;';
const size = '70px';
const item_size = '';
const clr_spinner = '';
const animation_duration = '1150ms';
const spinner4 = keyframes`
    0%,
      100% {
        transform: translateY(100%);
      }

      50% {
        transform: translateY(-100%);
      }
`;

export const Modal = styled.div`
  ${tw`w-[50%] rounded-[15px] absolute h-full bg-gray-50 opacity-50 z-[100]`}
`;

export const Spinners = styled.div`
  ${tw`rounded-[15px] w-[50%] absolute flex items-center justify-center h-full opacity-100`}
`;

export const SpinnerItems = styled.div`
  width: calc(${size} / 4);
  height: calc(${size} / 4);
  display: inline-block;
  margin: 0 7px;
  border-radius: 50%;
  z-index: 100;
  animation: ${spinner4} ${animation_duration} ease-in-out infinite;
  &:nth-child(1) {
    animation-delay: calc(${animation_duration} / 6 * -1);
    border: 4px solid ${clr5};
    background-color: ${clr5};
  }
  &:nth-child(2) {
    animation-delay: calc(${animation_duration} / 6 * -2);
    border: 4px solid ${clr3};
    background-color: ${clr3};
  }

  &:nth-child(3) {
    animation-delay: calc(${animation_duration} / 6 * -3);
    border: 4px solid ${clr1};
    background-color: ${clr1};
  }
  &:nth-child(4) {
    animation-delay: calc(${animation_duration} / 6 * -4);
    border: 4px solid ${clr6};
    background-color: ${clr6};
  }
`;
