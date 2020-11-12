import React from "react"
import { Field } from "redux-form";

import  "./FormsControl.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={"form__control" + " " + (hasError ? "error" : "")}>
            <div>
                <textarea  {...input} {...props} /> 
            </div>
            {hasError && <span> {meta.error}</span> } 
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={"form__control" + " " + (hasError ? "error" : "")}>
            <div>
                <input  {...input} {...props} /> 
            </div>
            {hasError && <span> {meta.error}</span> } 
        </div>
    )
}

export const createField = (placeholder, name, validate, component, props ={}, text="") => (
    <div><Field placeholder={placeholder} validate={validate} name={name} component={component} {...props} /></div>
)