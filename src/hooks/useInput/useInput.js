import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  createContext,
  useContext,
  createRef,
  useImperativeHandle,
} from 'react';

import { FormContext } from '../../context';

const useInput = props => {
  const form = useContext(FormContext);
  console.log(form);
  console.log(props);
  const itemRef = useRef();
  console.log(itemRef);
  const [storeRef, setStoreRef] = useState();
  // console.log(storeRef);
  const [value, setValue] = useState(props?.defaultValue || '');
  console.log({ value });
  // useEffect(() => {
  console.log('useEffect');
  useEffect(() => {
    const hotstoreRef = form.updateOrGetRef(props.name);
    setStoreRef(hotstoreRef);
  }, [form, props.name]);
  // console.log(props.name, hotStoreRef.current);
  // if (!hotStoreRef.current) {
  //   return;
  // }
  // setStoreRef(hotStoreRef);
  // }, [form, props.name]);
  console.log('useImperativeHandle');
  console.log({ storeRef });

  useImperativeHandle(storeRef, () => ({
    value,
    instance: itemRef.current,
  }));

  const handleChange = e => {
    setValue(e.target.value);
  };
  return [value, setValue, handleChange];
};

export default useInput;

const INPUT_TYPE = {
  idInput: {},
};
