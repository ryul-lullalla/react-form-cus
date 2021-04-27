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
const removeComma = str => {
    return String(str).replace(/[^\d]+/g, '');
};
const addCommaEstimate = str => {
    if (typeof parseInt(str) === 'number') {
        return String(parseInt(removeComma(str))).replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            '$1,',
        );
    }
    return str;
};
export const useArrayInput = props => {
    const form = useContext(FormContext);
    console.log({form})
    const itemRef = useRef();
    const [storeRef, setStoreRef] = useState();
    // const storeRef = useMemo(()=> form.updateOrGetRef(props.name),[form, props.name])
    const [value, setValue] = useState(props?.defaultValue || '');
    // useEffect(() => {
    useEffect(() => {
        console.log("useInput useEffect", props.name)
        form.setRefAsArray(props.name);
    }, [form, props.name]);
    // if (!hotStoreRef.current) {
    //   return;
    // }
    // setStoreRef(hotStoreRef);
    // }, [form, props.name]);

// useEffect(()=> {
//   if (props.setValueAsNumber) {
//     setValue(e?.target?.value);
//
//   }
// })

    const handleChange = e => {
        console.log(e, typeof e)
        console.log(new Date())
        if (props.numberOnly) {
            if (props.setNumWithComma) {
                itemRef.current.value = addCommaEstimate(e.target.value)

            }
            if (isNaN(removeComma(e.target.value))) {
                return
            }
            setValue(parseInt(removeComma(e?.target?.value)));
            return
        }
        if (props.type==='datePicker') {
            setValue(e);
            return

        }
        setValue(e?.target?.value);
        //   setStoreRef({...storeRef, value: e.target.value})
    };
//   const onChange =()=> {
// setValue("ONCHANGE")  }
    return [value, setValue, handleChange,itemRef ];
};


const INPUT_TYPE = {
    idInput: {},
};
