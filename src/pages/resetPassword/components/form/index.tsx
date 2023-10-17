import React, { useState } from 'react';
import { Wrapper, FormItem, Title, Label, Input, SubmitBtn } from './styles';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PasswordRecoveryService } from 'services/passwordRecoveryService';

export default function Form(): JSX.Element {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        return;
    }
  };

  const isPasswordsMatch = password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!isPasswordsMatch) {
        toast.error("Passwords doesn't match!");
        setPassword('');
        setConfirmPassword('');
        return;
      }
      const data = await PasswordRecoveryService.update({
        password,
        email,
      });
      setPassword('');
      if (data) toast.success('Check your mail!');
      navigate('/');
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <Wrapper>
      <FormItem onSubmit={handleSubmit}>
        <Title>Set new password</Title>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
          value={password}
        />
        <Label>Confirm password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <SubmitBtn type="submit">Update password</SubmitBtn>
      </FormItem>
    </Wrapper>
  );
}
