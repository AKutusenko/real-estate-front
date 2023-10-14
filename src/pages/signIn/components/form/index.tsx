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

export default function Form(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    console.log(email, password);
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={handleChange}
          value={email}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={handleChange}
          value={password}
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
