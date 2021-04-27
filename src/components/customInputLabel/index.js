import React ,{memo}from 'react';

export const CustomInputLabel = memo(({label})=> {
    return (
        <label>
            {label}
        </label>
    )
})