import React from 'react';
import { NotFoundItem, GoHomeButton } from './styles';

export default function NotFound(): JSX.Element {
  return (
    <NotFoundItem>
      <GoHomeButton href="/">Go home</GoHomeButton>
    </NotFoundItem>
  );
}
