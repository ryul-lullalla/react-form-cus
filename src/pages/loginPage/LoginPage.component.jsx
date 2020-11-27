import React from 'react';

const LoginPage = () => {
  const TTest = {
    key: 'value',
  };
  console.log(typeof TTest.key);

  const handleTestButtonClick = e => {
    console.log('button name is ===', e.target.name);
  };
  const handleTestInputChange = e => {
    console.log('input value is ===', e.target.value);
  };
  // const handleRegError = () => {

  // }
  // {
  //   input: {
  //     type: 'password',
  //     name: 'password',
  //     label: 'this is input test label1',
  //     placeholder: 'this is input test placeholder1',
  //     hanldeChange: handleTestInputChange,
  //   },
  //   button: {
  //     content: 'this is button test content',
  //     handleClick: handleTestButtonClick,
  //   },
  // },

  return (
    <form>
      <label>아이디</label>
      <input type="text" name="id" />
      <label>비밀번호</label>
      <input type="password" name="password" />
    </form>
  );
};

export default LoginPage;
