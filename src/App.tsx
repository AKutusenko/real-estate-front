import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import PasswordRecovery from './pages/passwordRecovery';
import { useAppDispatch } from 'store/hooks';
import { getTokenFromLocalStorage } from 'helpers/localstorage.helper';
import { AuthService } from 'services/auth.service';
import { signOut, signIn } from 'store/user/userSlice';
import NotFound from 'pages/404';
import ResetPassword from 'pages/resetPassword';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();
    try {
      if (token) {
        const data = await AuthService.getProfile();
        if (data) {
          dispatch(signIn(data));
        } else {
          dispatch(signOut());
        }
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/passwordrecovery" element={<PasswordRecovery />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
