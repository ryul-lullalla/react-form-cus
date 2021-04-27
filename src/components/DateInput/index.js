import React, { useState, forwardRef } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';

import "react-datepicker/dist/react-datepicker.css";
import {Input} from "../customInput";
import useInput from "../../hooks/useInput/useInput";

// registerLocale('ko', ko)
const ExampleCustomInput = forwardRef(
    ({ value, onClick,onBlurHandler }, ref) => {
        return(
        <input className="example-custom-input"  required={true} onClick={onClick} onBlur={onBlurHandler}ref={ref} value={value}/>

    )},
);


export const DateInput = ({type,isMonthOnly})=> {
    const propsObj = {
        type,
        name:"date",
        label:"날짜",
        // required: true,
        // defaultValue:new Date()
    }
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue, handleChange,itemRef] = useInput(propsObj);
const onBlurHandler = ()=>{
    console.log("ON BLUR")
}
    return (
        <DatePicker
            selected={value}
            onChange={date => handleChange(date)}
            customInput={<ExampleCustomInput value={value} onBlurHandler={onBlurHandler}/>}
            ref={itemRef}
            dateFormat="yyyy.MM"
            showMonthYearPicker={!!isMonthOnly}
// locale={"ko"}
locale={ko}
            // required={true}
        />
    )
}