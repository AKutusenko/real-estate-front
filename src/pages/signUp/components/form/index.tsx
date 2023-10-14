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

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
          value={firstName}
        />
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Last name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
          value={lastName}
        />
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
        <SubmitBtn type="submit">Sign Up</SubmitBtn>
        <LinkWrapper>
          <Text>Already have account?</Text>
          <Link href="/signin">Sign In</Link>
        </LinkWrapper>
      </FormItem>
    </Wrapper>
  );
}
