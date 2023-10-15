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
import { useSignInMutation } from 'store/api/authApi';

export default function Form(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signIn, { data, isLoading, isSuccess, isError, error }] =
    useSignInMutation();

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

  async function sendUserData() {
    await signIn({ email, password });
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    sendUserData();
    setEmail('');
    setPassword('');
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
