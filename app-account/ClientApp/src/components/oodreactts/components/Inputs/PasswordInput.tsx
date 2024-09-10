import * as React from "react";
import { useState } from "react";
import "../../styles/Input.css";
import { Button } from "../Core/Button";
import { defaultValidator, IInputProps, InputSpan, onKeyDown, onValueChange } from "./InputSpan";
import { ColorScheme } from "../Component";

interface IPasswordInputProps extends IInputProps<string> {
    showable?: boolean;
}

export function PasswordInput(props: IPasswordInputProps): JSX.Element {
    const checkValidity = props.checkValidity ? props.checkValidity : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    const showIcon = <svg color="currentColor" fill="currentColor" width="30px" height="30px">
        <defs>
            <mask id="center-eye">
                <rect x="0" y="0" height="30" width="30" fill="white"/>
                <circle cx="15" cy="15" r="3" fill="black"/>
            </mask>
        </defs>
        {/* <path d="M 5 15 C 10 20, 20 20, 25 15" stroke="currentColor" fill="currentColor" mask="url(#center-eye)"/>
        <path d="M 5 15 C 10 10, 20 10, 25 15" stroke="currentColor" fill="currentColor" mask="url(#center-eye)"/> */}
        <ellipse cx="15" cy="15" rx="10" ry="5" mask="url(#center-eye)"/>
    </svg>
    const hideIcon = <svg color="currentColor" fill="currentColor" width="30px" height="30px">
        <defs>
            <mask id="center-eye">
                <rect x="0" y="0" height="30" width="30" fill="white"/>
                <circle cx="15" cy="15" r="3" fill="black"/>
            </mask>
        </defs>
        {/* <path d="M 5 15 C 10 20, 20 20, 25 15" stroke="currentColor" fill="currentColor" mask="url(#center-eye)"/>
        <path d="M 5 15 C 10 10, 20 10, 25 15" stroke="currentColor" fill="currentColor" mask="url(#center-eye)"/> */}
        <ellipse cx="15" cy="15" rx="10" ry="5" mask="url(#center-eye)"/>
        <line x1="5" x2="25" y1="25" y2="5" stroke="currentColor"/>
    </svg>

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
            {props.showable ? (
                <Button seamless onClick={toggleVisible(setVisible, visible)} transparent>
                    {/* @TODO replace this with icon */}
                    {visible ? hideIcon : showIcon}
                </Button>
            ) : null}
        </InputSpan>
    );
}

function toggleVisible(setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean) {
    return () => setVisible(!visible);
}
