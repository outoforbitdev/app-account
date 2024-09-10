import * as React from "react";
import { useState } from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Input.css";
import { defaultValidator, IInputProps, InputSpan, ISetValidatorResult, onKeyDown, onValueChange } from "./InputSpan";
import { ColorScheme } from "../Component";

interface IEmailInputProps extends IInputProps<string> {
    clearable?: boolean;
}

export function EmailInput(props: IEmailInputProps): JSX.Element {
    const checkValidity = defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [validatorResult, setValidatorResult] = useState({valid: true})

    return (
        <InputSpan
            className={props.className}
            validatorResult={validatorResult}
            colorScheme={props.colorScheme ?? ColorScheme.Primary}
        >
            <input
                type={"text"}
                inputMode={"text"}
                defaultValue={defaultValue}
                className={"OODCoreComponentTextField"}
                onChange={onValueChange(checkValidity, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
                onBlur={() => checkEmailValidity(value, setValidatorResult)}
            />
        </InputSpan>
    );
}

function checkEmailValidity(val: string, setValidatorResult: ISetValidatorResult) {
    console.log("validator: " + val);
    if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9].[a-z]$/.test(val)) {
        setValidatorResult({
            valid: true
        });
    }
    console.log("invalid");
    setValidatorResult({
        valid: false,
        error: "Please enter a valid email address.",
    });
} 
