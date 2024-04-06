import * as React from "react";
import { useState } from "react";
import "../../styles/Input.css";
import { Button } from "../Core/Button";
import { defaultValidator, IInputProps, InputSpan, onKeyDown, onValueChange } from "./InputSpan";

interface IPasswordInputProps extends IInputProps<string> {
    showable?: boolean;
}

export function PasswordInput(props: IPasswordInputProps): JSX.Element {
    const checkValidity = props.checkValidity ? props.checkValidity : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    return (
        <InputSpan 
            breakLabel={props.breakLabel} 
            className={props.className} 
            label={props.label}
        >
            <input
                type={visible ? "text" : "password"}
                inputMode={"text"}
                defaultValue={props.defaultValue}
                onChange={onValueChange(checkValidity, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
                size={props.size}
            />
            {props.showable ? (
                <Button seamless onClick={toggleVisible(setVisible, visible)} width={"40px"}>
                    {/* @TODO replace this with icon */}
                    {visible ? "Hide" : "Show"}
                </Button>
            ) : null}
        </InputSpan>
    );
}

function toggleVisible(setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean) {
    return () => setVisible(!visible);
}
