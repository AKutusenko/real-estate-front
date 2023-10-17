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
import { AuthService } from 'services/auth.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.signUp({
        firstName,
        lastName,
        email,
        password,
      });
      resetState();
      if (data) toast.success('Account has been created!');
      navigate('/');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  function resetState() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

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
