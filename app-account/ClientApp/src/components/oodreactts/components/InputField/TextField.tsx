import * as React from "react";
import { useState } from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Input.css";
import { Button } from "../Core/Button";
import { defaultValidator, IInputProps, InputSpan, onBlur, onKeyDown, onValueChange } from "./InputField";

interface ITextFieldProps extends IInputProps<string> {
    clearable?: boolean;
}

export function TextField(props: ITextFieldProps): JSX.Element {
    const onQuickValidate = props.onQuickValidate ? props.onQuickValidate : defaultValidator;
    const onFullValidate = props.onFullValidate ? props.onFullValidate : defaultValidator;
    const onChange = props.onValueChange ? props.onValueChange : (_val: string) => {};
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);

    return (
        <InputSpan label={props.label} breakLabel={props.breakLabel} className={props.className} >
            <input
                type={"text"}
                inputMode={"text"}
                value={value}
                className={"OODCoreComponentTextField"}
                onBlur={onBlur(onQuickValidate, onFullValidate)}
                onChange={onValueChange(onQuickValidate, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
            />
            {props.clearable ? (
                <Button
                    // onClick={Compose(__clearField, setValue)}
                    seamless
                    width={"40px"}
                >
                    {"Clear"}
                </Button>
            ) : null}
        </InputSpan>
    );
}

function __clearField(setValue: (val: string) => void): void {
    setValue("");
}

//function defaultValidator(_val: string) {
//    return true;
//}

//function onBlur(onQuickValidate: TextValidator, onFullValidate: TextValidator) {
//    return (event: FocusEvent<HTMLInputElement>) => {
//        const val = event.target.value;

//        if (!onQuickValidate(val) || !onFullValidate(val)) {
//            event.currentTarget.focus();
//        }
//    }
//}

//function onValueChange(
//    onQuickValidate: TextValidator,
//    onValueChange: (val: string) => void,
//    setValue: (val: string) => void)
//{
//    return (event: ChangeEvent<HTMLInputElement>) => {
//        const val = event.target.value;

//        setValue(val);

//        if (onQuickValidate(val)) {
//            onValueChange(val);
//        }
//    };
//}

//function onKeyDown(setValue: (val: string) => void, defaultValue: string) {
//    return (event: KeyboardEvent<HTMLInputElement>) => {
//        if (event.keyCode === 28) {
//            setValue(defaultValue);
//        }
//    }
//}
