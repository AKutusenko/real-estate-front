import React from 'react';
import { MainItem } from './styles';
import Form from '../form';
import MainImage from 'components/mainImage';

export default function Main(): JSX.Element {
  return (
    <MainItem>
      <MainImage />
      <Form />
    </MainItem>
  );
}
