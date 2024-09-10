import * as React from "react";
import { useState } from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Input.css";
import { createOnChange, IInputProps, InputSpan } from "./InputSpan";
import { ColorScheme } from "../Component";

interface IEmailInputProps extends IInputProps<string> {
    clearable?: boolean;
    setIsValid?: (valid: boolean) => void;
}

export function EmailInput(props: IEmailInputProps): JSX.Element {
    const setIsValid = props.setIsValid ?? ((val: boolean) => {return;});
    const onValueChange = props.onValueChange ?? ((val: string) => {return;});
    const onChange = createOnChange(checkEmailValidity(setIsValid, onValueChange));
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    return (
        <InputSpan
            className={props.className}
            colorScheme={props.colorScheme ?? ColorScheme.Primary}
            error={props.error}
        >
            <input
                type={"text"}
                inputMode={"text"}
                defaultValue={defaultValue}
                className={"OODCoreComponentTextField"}
                onChange={onChange}
            />
        </InputSpan>
    );
}

function checkEmailValidity(setIsValid: (valid: boolean) => void, onChange: (value: string) => void) {
    return (val: string) => {
        if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]+$/.test(val)) {
            setIsValid(true);
            onChange(val);
            return;
        }
        setIsValid(false);
        onChange(val);
    }
} 
