import * as React from "react";
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import "../../styles/Input.css";
import "../../styles/Themes.css";
import { IChildlessComponentProps, IComponentProps, getClassName } from "../Component";

interface IInputValidatorResult {
    valid: boolean;
    error?: string;
}
type InputValidator<T> = (val: T) => IInputValidatorResult;
type InputChange<T> = (val: T) => void;

export interface IInputProps<T> extends IChildlessComponentProps {
    defaultValue?: T;
    label?: string;
    breakLabel?: boolean;
    onValueChange?: InputChange<T>;
    checkValidity?: InputValidator<T>;
    size?: number;
}

interface IInputSpanProps extends IComponentProps {
    label?: string
    breakLabel?: boolean;
    width?: string;
    maxWidth?: string;
}

export function InputSpan(props: IInputSpanProps): JSX.Element {
    const label = <label>{props.label}</label>
    return(
        <div className={getClassName("OODCoreComponentInputDiv", props.className)} >
            {props.label ? <label>{props.label}</label> : null}
            {props.label && props.breakLabel ? <br /> : null}
            <span className={"OODCoreComponentInputSpan"}>
                {props.children}
            </span>
        </div>
    );
}

export function defaultValidator<T>(_val: T): IInputValidatorResult {
    return {valid: true};
}

export function onBlur<T>(onQuickValidate: InputValidator<T>, onFullValidate: InputValidator<T>) {
    return (event: FocusEvent<HTMLInputElement>) => {
        const val = event.target.value as unknown as T;

        if (val) {
            if (!onQuickValidate(val) || !onFullValidate(val)) {
                event.currentTarget.focus();
            }
        }
    };
}

export function onValueChange<T>(
    onQuickValidate: InputValidator<T>,
    onValueChange: InputChange<T>,
    setValue: InputChange<T>,
) {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value as unknown as T;

        if (val) {
            setValue(val);

            if (onQuickValidate(val)) {
                onValueChange(val);
            }
        }
    };
}

export function onKeyDown<T>(setValue: (val: T) => void, defaultValue: T) {
    return (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 28) {
            setValue(defaultValue);
        }
    };
}
