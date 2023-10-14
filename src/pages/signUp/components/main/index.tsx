import React from 'react';
import { MainImage, MainItem } from './styles';
import Form from '../form';

export default function Main(): JSX.Element {
  return (
    <MainItem>
      <MainImage />
      <Form />
    </MainItem>
  );
}
