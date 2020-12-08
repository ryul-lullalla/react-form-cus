import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  createContext,
  useContext,
  createRef,
} from 'react';

const useForm = formSubmit => {
  console.log(formSubmit);
  const [refStore, setRefStore] = useState({});
  const [registeredItemPaths, setRegisteredItemPaths] = useState([]);
  const updateOrGetRef = name => {
    console.log(name);
    if (!name) {
      throw Error('NAME SHOULD BE DEFINED AS PROPS FOR INPUT COMPONENT');
    }
    console.log('updateOrGetRef');
    const registeredRef = refStore?.[name] || false;
    console.log(registeredRef);
    if (registeredRef) {
      return registeredRef;
    }
    console.log('before setRegisteredItemPaths');

    setRegisteredItemPaths([...registeredItemPaths, name]);
    const newRef = createRef();
    setRefStore({ ...refStore, [name]: newRef });
    return newRef;
  };
  const submit = e => {
    e.preventDefault();
    console.log(formSubmit);
    console.log(refStore);
    console.log(registeredItemPaths);

    formSubmit(e);
  };
  console.log(refStore, updateOrGetRef, submit);
  return { refStore, updateOrGetRef, submit };
};

export default useForm;
