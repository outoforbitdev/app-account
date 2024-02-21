import * as React from "react";
import { useState } from "react";
import "../../styles/Input.css";
import { Button } from "../Core/Button";
import { defaultValidator, IInputProps, InputSpan, onBlur, onKeyDown, onValueChange } from "./InputField";

interface IPasswordFieldProps extends IInputProps<string> {
    showable?: boolean;
}

export function PasswordField(props: IPasswordFieldProps): JSX.Element {
    const onQuickValidate = props.onQuickValidate ? props.onQuickValidate : defaultValidator;
    const onFullValidate = props.onFullValidate ? props.onFullValidate : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    return (
        <InputSpan label={props.label} breakLabel={props.breakLabel} className={props.className} >
            <input
                type={visible ? "text" : "password"}
                inputMode={"text"}
                value={props.defaultValue}
                onBlur={onBlur(onQuickValidate, onFullValidate)}
                onChange={onValueChange(onQuickValidate, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
                size={props.size}
            />
            {props.showable ? (
                <Button seamless onClick={toggleVisible(setVisible, visible)} width={"40px"}>
                    {visible ? "Hide" : "Show"}
                </Button>
            ) : null}
        </InputSpan>
    );
}

function toggleVisible(setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean) {
    return () => setVisible(!visible);
}
