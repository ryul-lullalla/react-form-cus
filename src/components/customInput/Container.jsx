import React, { useRef,memo } from 'react';
import styled from 'styled-components'
import useInput from '../../hooks/useInput/useInput';
import {CustomInputLabel} from '../customInputLabel'
const InputContainer = memo(props => {
  const [value, setValue, handleChange,itemRef,onChange] = useInput(props);
  return (
    <div>
      <CustomInputLabel label={props.label}/>
      <NewInput
        placeholder={props.placeholder}
        type={props.type}
        name="email"
        // value={value|| ""}
          defaultValue={props.defaultValue || ""}
        onChange={handleChange}
        ref={itemRef}
        required={!!props.required}
        validationMessage={"nonono"}
        // onChange={onChange}
      />
    </div>
  );
});

export default InputContainer;

const NewInput = styled.input`
`