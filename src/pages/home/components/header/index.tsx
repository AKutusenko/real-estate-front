import React from 'react';
import { Wrapper, Logo, LoginBtn, SignUpBtn } from './styles';

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Logo>My Logo</Logo>
      <div>
        <LoginBtn>Log In</LoginBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
      </div>
    </Wrapper>
  );
}
