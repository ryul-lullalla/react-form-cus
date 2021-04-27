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
import useInput from "../../hooks/useInput/useInput";
import {FormContext} from "../../context";
import { Input, Form ,DateInput} from '../../components';
import {useArrayInput} from '../../hooks/useArrayInput'

export const ArrayInputsComp = ()=> {
    const form = useContext(FormContext);
console.log(form)
    console.log("ArrayInputsComp")
    // form.setRefAsArray("testInputs")
    const propsObj = {
        name:"testInputs",
        label:"날짜",
    }
    // const [value, setValue, handleChange,itemRef] = useInput(propsObj);
useEffect(()=> {
    console.log("multiInputs useEffect")
    form.setRefAsArray("testInputs")

},[])
    return (
        <div>
        {console.log("ArrayInputsComp JSX")}
            <Input  name="testInputs" required />
            <Input  name="testInputs" />
            <Input  name="testInputs" />

        </div>
    )
}