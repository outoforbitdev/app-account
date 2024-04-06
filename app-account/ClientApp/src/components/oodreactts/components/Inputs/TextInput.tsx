import * as React from "react";
import { useState } from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Input.css";
import { defaultValidator, IInputProps, InputSpan, onKeyDown, onValueChange } from "./InputSpan";

interface ITextInputProps extends IInputProps<string> {
    clearable?: boolean;
}

export function TextInput(props: ITextInputProps): JSX.Element {
    const checkValidity = props.checkValidity ? props.checkValidity : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);

    return (
        <InputSpan 
            breakLabel={props.breakLabel} 
            className={props.className} 
            label={props.label} 
        >
            <input
                type={"text"}
                inputMode={"text"}
                defaultValue={defaultValue}
                className={"OODCoreComponentTextField"}
                onChange={onValueChange(checkValidity, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
            />
        </InputSpan>
    );
}
