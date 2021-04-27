import React, {useContext} from 'react';

import { Input, Form ,DateInput} from '../../components';
import useForm from '../../hooks/useForm/useForm';
import {FormContext} from "../../context";
import {ArrayInputsComp} from '../../components/arrayInputs'
import {useArrayInput} from '../../hooks/useArrayInput'
const SignUpPage = props => {
  console.log('SignUpPage');
// form.setRefAsArray('testInput')
  const inputEl = {
    type: 'email',
    label: '아이디',
    placeholder: '이메일 주소를 입력해주세요.',
    defaultValue: '',
    required: true,
  };

  const handleSubmit = (e, refStore) => {
    e.preventDefault();
    console.log('handleSubmit',refStore);
    console.log(refStore.id.current.instance)
    console.log(refStore.date.current.instance.setOpen)
  };
  return (
    <div>
      <Form formSubmit={handleSubmit}>
        <Input
          // type="email"
          name="id"
          label="아이디"
          // required
          placeholder="이메일 주소를 입력해주세요."
          defaultValue="clee@energyx.co.kr"
          numberOnly
          setNumWithComma
        />
        <Input type="password" name="password" />
        <DateInput type={"datePicker"} isMonthOnly/>
        {/*{form.}*/}
        <ArrayInputsComp/>
        <button type="submit">등록</button>
      </Form>
    </div>
  );
};

export default SignUpPage;
