import React from 'react';
import { Wrapper, Logo, LoginLink, SignUpLink, LinkWrapper } from './styles';

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Logo href="/">My Logo</Logo>
      <LinkWrapper>
        <LoginLink href="signin">Log In</LoginLink>
        <SignUpLink href="signup">Sign Up</SignUpLink>
      </LinkWrapper>
    </Wrapper>
  );
}
