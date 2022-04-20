import React from 'react'
import { Modal, Spinners, SpinnerItems } from './Animation.style'
const Animation = () => {
  return (
    <>
      <Modal></Modal>
      <Spinners>
        <SpinnerItems />
        <SpinnerItems />
        <SpinnerItems />
        <SpinnerItems />
      </Spinners>
    </>
  );
}

export default Animation