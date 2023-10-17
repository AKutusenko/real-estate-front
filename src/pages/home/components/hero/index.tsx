import React from 'react';
import { Wrapper, Title, Mission, HeroBtn } from './styles';
import { useNavigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';

export default function Hero(): JSX.Element {
  const navigate = useNavigate();
  const isAuth = useAuth();

  function handleClick() {
    !isAuth
      ? navigate('/signin')
      : setTimeout(() => {
          window.scrollBy(0, 1050);
        }, 100);
  }

  return (
    <Wrapper>
      <Title>The chemical negatively charged</Title>
      <Mission>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is{' '}
      </Mission>
      <HeroBtn onClick={handleClick}>Get started</HeroBtn>
    </Wrapper>
  );
}
