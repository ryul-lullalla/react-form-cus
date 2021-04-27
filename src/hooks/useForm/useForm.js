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
  const [refStore, setRefStore] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [registeredItemPaths, setRegisteredItemPaths] = useState([]);
  const [registeredItemPathsInArray, setRegisteredItemPathsInArray] = useState([]);
  const updateOrGetRef = name => {
    if (!name) {
      throw Error('NAME SHOULD BE DEFINED AS PROPS FOR INPUT COMPONENT');
    }
    console.log(name)

    const registeredRef = refStore?.[name] || false;
    console.log({registeredRef,name,refStore})
    console.log({registeredItemPathsInArray,registeredItemPaths})
    if (registeredRef) {
      if (registeredItemPathsInArray.includes(name)) {
        const newRef = createRef();
        console.log(name)
        console.log(refStore[name])
        console.log(refStore[name].current)
        console.log(refStore)
        if (!!refStore[name].current) {
        setRefStore({ ...refStore, [name]: [...refStore?.[name], newRef] });
        } else {
          setRefStore({ ...refStore, [name]: [ newRef] });
        }
        return newRef
      }
      return registeredRef;
    } else {

console.log(name)
    setRegisteredItemPaths([...registeredItemPaths, name]);
    const newRef = createRef();
    setRefStore({ ...refStore, [name]: newRef });
    return newRef;
    }
  };

  const submit = e => {
    e.preventDefault();
    formSubmit(e, refStore);
  };
  const setRefAsArray = (name)=> {
    console.log('setRefAsArray')
const registeredRef = !!registeredItemPathsInArray.includes(name)
    console.log({registeredRef,name})
    if (registeredRef) {
      return
    }
    console.log("not registered ref")
    setRegisteredItemPathsInArray([...registeredItemPathsInArray, name])
  }
  useEffect(()=> {
    console.log("useEffect refStore", {refStore})
    // const validation = Object.keys(refStore).map((ref, refIdx)=> {
    //   if (ref.current.required) {
    //
    //   }
    // })

    for ( const key in refStore) {
      if (refStore[key].current?.required && refStore[key].current?.value && isValid) {
        return setIsValid(false)
      }
    }
  },[refStore])

  const onChange = ()=> {
  }
  return { refStore, updateOrGetRef, submit,isValid,setRefAsArray,registeredItemPathsInArray };
};

export default useForm;
