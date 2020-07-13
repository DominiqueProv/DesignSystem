import React from 'react';
import { typeScale } from '../utils';
import styled from 'styled-components';
import { Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';
import { useSpring, animated } from 'react-spring';

const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.PrimaryButton};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-100%)`,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="SignUp"
          aria-hidden="true"
          width="400px"
          onClick={() => setShowModal(false)}
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Lorem ipsum dolor sit amet</SignUpText>
        <PrimaryButton>Sign Up!</PrimaryButton>
      </ModalWrapper>
    </animated.div>
  );
};
