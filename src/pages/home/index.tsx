import React from 'react';
import Header from '../../components/header';
import { Wrapper, Hero, Title, Mission, HeroBtn } from './styles';

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <Hero>
        <Title>The chemical negatively charged</Title>
        <Mission>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is{' '}
        </Mission>
        <HeroBtn>Get started</HeroBtn>
      </Hero>
    </Wrapper>
  );
}
