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
import { useSendEmailMutation } from 'store/api/forgotPassword';

export default function Form(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [sendEmail] = useSendEmailMutation();

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  async function sendUserData() {
    sendEmail({ email });
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    sendUserData();
    setEmail('');
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
