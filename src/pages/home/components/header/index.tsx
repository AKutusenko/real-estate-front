import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Logo,
  LoginLink,
  SignUpLink,
  LinkWrapper,
  LogOutBtn,
} from './styles';
import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from 'store/hooks';
import { signOut } from 'store/user/userSlice';
import { removeTokenFromLocalStorage } from 'helpers/localstorage.helper';
import { useNavigate } from 'react-router';

export default function Header(): JSX.Element {
  let isAuth = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(signOut);
    removeTokenFromLocalStorage('token');
    navigate(0);
    isAuth = false;
  };

  return (
    <Wrapper>
      <Logo href="/">My Logo</Logo>
      {isAuth ? (
        <LinkWrapper>
          <LogOutBtn onClick={logOutHandler}>Log out</LogOutBtn>
        </LinkWrapper>
      ) : (
        <LinkWrapper>
          <LoginLink href="signin">Log In</LoginLink>
          <SignUpLink href="signup">Sign Up</SignUpLink>
        </LinkWrapper>
      )}
    </Wrapper>
  );
}
