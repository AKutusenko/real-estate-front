import React, { useState } from 'react';
import {
  Wrapper,
  FormItem,
  Title,
  Label,
  Input,
  Link,
  SubmitBtn,
  LinkWrapper,
  Text,
  ForgotLink,
} from './styles';
import { useNavigate } from 'react-router';
import { AuthService } from 'services/auth.service';
import { toast } from 'react-toastify';
import { setTokenToLocalStorage } from 'helpers/localstorage.helper';
import { useAppDispatch } from 'store/hooks';
import { signIn } from 'store/user/userSlice';

export default function Form(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.signIn({
        email,
        password,
      });
      resetState();
      if (data) {
        toast.success('You have logged in!');
        setTokenToLocalStorage('token', data.token);
        dispatch(signIn(data));
      }
      navigate('/');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  function resetState() {
    setEmail('');
    setPassword('');
  }

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Wrapper>
      <FormItem onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={password}
          autoComplete="username"
        />
        <ForgotLink href="/passwordrecovery">Forgot password?</ForgotLink>
        <SubmitBtn type="submit">Sign In</SubmitBtn>
        <LinkWrapper>
          <Text>Don&apos;t have account?</Text>
          <Link href="/signup">Sign Up</Link>
        </LinkWrapper>
      </FormItem>
    </Wrapper>
  );
}
