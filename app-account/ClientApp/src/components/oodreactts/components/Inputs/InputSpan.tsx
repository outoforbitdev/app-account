import * as React from "react";
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import "../../styles/Input.css";
import "../../styles/Themes.css";
import { ColorScheme, IChildlessComponentProps, IComponentProps, getClassName, getColorSchemeClassName } from "../Component";

interface IInputValidatorResult {
    valid: boolean;
    error?: string;
}
export type ISetValidatorResult = React.Dispatch<React.SetStateAction<{valid: boolean, error?: string}>>
type InputValidator<T> = (val: T) => IInputValidatorResult;
type InputChange<T> = (val: T) => void;

export interface IInputProps<T> extends IChildlessComponentProps {
    defaultValue?: T;
    onValueChange?: InputChange<T>;
    checkValidity?: InputValidator<T>;
    disabled?: boolean;
}

interface IInputSpanProps extends IComponentProps {
    width?: string;
    maxWidth?: string;
    validatorResult?: IInputValidatorResult;
    colorScheme: ColorScheme;
}

export function InputSpan(props: IInputSpanProps): JSX.Element {
    const isValid = props.validatorResult ? (props.validatorResult.valid ? true : false) : true;
    const inputInvalidColorScheme = isValid ? "" : getColorSchemeClassName("", ColorScheme.Error, true);
    const spanInvalidColorScheme = isValid ? "" : getColorSchemeClassName("", ColorScheme.Error);

    const colorSchemeClassName = getColorSchemeClassName(
        "OODCoreComponentInputSpan",
        props.colorScheme,
        true
    );

    const validitySpan = 
        <span className={getClassName("OODCoreComponentInputValidationSpan", spanInvalidColorScheme)}>
            { isValid ? null : props.validatorResult?.error }
        </span>

    return(
        <div className={getClassName("OODCoreComponentInputDiv", props.className)} >
            <div className={getClassName(colorSchemeClassName, inputInvalidColorScheme)}>
                {props.children}
            </div>
            {props.validatorResult ? validitySpan : null}
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
