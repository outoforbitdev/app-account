import * as React from "react";
import { useState } from "react";
import "../../styles/Input.css";
import { Button } from "../Core/Button";
import { defaultValidator, IInputProps, InputSpan, onKeyDown, onValueChange } from "./InputSpan";
import { ColorScheme } from "../Component";

interface ISelectInputProps extends IInputProps<string> {
    children?: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
}

export function SelectInput(props: ISelectInputProps): JSX.Element {
    const checkValidity = props.checkValidity ? props.checkValidity : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    return (
        <InputSpan
            className={props.className}
            colorScheme={props.colorScheme ?? ColorScheme.Primary}
        >
            <input
                type={visible ? "text" : "password"}
                inputMode={"text"}
                defaultValue={props.defaultValue}
                onChange={onValueChange(checkValidity, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
            />
        </InputSpan>
    );
}
