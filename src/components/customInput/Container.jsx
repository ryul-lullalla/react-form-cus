import React, { useRef } from 'react';

import useInput from '../../hooks/useInput/useInput';

const InputContainer = props => {
  console.log(props.name);
  const [value, setValue, handleChange] = useInput(props);
  console.log({ value });
  return (
    <div>
      <div>{props.label}</div>
      <input
        placeholder={props.placeholder}
        type={props.type}
        nanme="email"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputContainer;
