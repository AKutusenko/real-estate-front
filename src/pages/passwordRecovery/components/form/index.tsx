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
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { PasswordRecoveryService } from 'services/passwordRecoveryService';

export default function Form(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await PasswordRecoveryService.recovery({
        email,
      });
      setEmail('');
      toast.success('Check your mail!');
      navigate('/');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <Wrapper>
      <FormItem onSubmit={handleSubmit}>
        <Title>Password recovery</Title>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email}
        />
        <SubmitBtn type="submit">Recovery</SubmitBtn>
        <LinkWrapper>
          <Text>Don&apos;t have account?</Text>
          <Link href="/signup">Sign Up</Link>
        </LinkWrapper>
      </FormItem>
    </Wrapper>
  );
}
