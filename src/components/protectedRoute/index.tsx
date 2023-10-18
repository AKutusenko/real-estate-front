import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { CLosedSection } from './styles';

export default function ProtectedRoute({ children }): JSX.Element {
  const isAuth = useAuth();

  return <>{isAuth ? children : <CLosedSection />}</>;
}
