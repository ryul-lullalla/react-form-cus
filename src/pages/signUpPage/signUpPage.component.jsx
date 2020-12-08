import React from 'react';

import { Input, Form } from '../../components';
import useForm from '../../hooks/useForm/useForm';

const SignUpPage = props => {
  console.log('SignUpPage');
  const inputEl = {
    type: 'email',
    label: '아이디',
    placeholder: '이메일 주소를 입력해주세요.',
    defaultValue: '',
    required: true,
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
  };
  return (
    <div>
      <Form formSubmit={handleSubmit}>
        <Input
          type="email"
          name="id"
          label="아이디"
          required
          placeholder="이메일 주소를 입력해주세요."
          defaultValue=""
        />
        <Input type="password" name="password" />
        <button type="submit">등록</button>
      </Form>
    </div>
  );
};

export default SignUpPage;
