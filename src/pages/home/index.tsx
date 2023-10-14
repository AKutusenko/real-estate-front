import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Gallery from './components/gallery';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
    </>
  );
}
