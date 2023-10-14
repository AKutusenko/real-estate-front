import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import PasswordRecovery from './pages/passwordRecovery';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/passwordrecovery" element={<PasswordRecovery />} />
    </Routes>
  );
}
