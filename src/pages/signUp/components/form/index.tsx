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
} from './styles';
import { useSignUpMutation } from 'store/api/authApi';

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signUp, { data, isLoading, isSuccess, isError, error }] =
    useSignUpMutation();

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
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
    await signUp({ firstName, lastName, email, password });
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    sendUserData();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <FormItem onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          placeholder="First name"
          required
          onChange={handleChange}
          value={firstName}
        />
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          onChange={handleChange}
          value={lastName}
        />
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
        <SubmitBtn type="submit">Sign Up</SubmitBtn>
        <LinkWrapper>
          <Text>Already have account?</Text>
          <Link href="/signin">Sign In</Link>
        </LinkWrapper>
      </FormItem>
    </Wrapper>
  );
}
