import * as React from "react";
import { useState } from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Input.css";
import { createOnChange, IInputProps, InputSpan } from "./InputSpan";
import { ColorScheme } from "../Component";

interface ITextInputProps extends IInputProps<string> {
    clearable?: boolean;
}

export function TextInput(props: ITextInputProps): JSX.Element {
    const onChange = createOnChange(props.onValueChange ? props.onValueChange : (_val: string) => {});
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    return (
        <InputSpan
            className={props.className}
            colorScheme={props.colorScheme ?? ColorScheme.Primary}
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
