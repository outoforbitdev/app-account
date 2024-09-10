import * as React from "react";
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import "../../styles/Input.css";
import "../../styles/Themes.css";
import { ColorScheme, IChildlessComponentProps, IComponentProps, getClassName, getColorSchemeClassName } from "../Component";

export interface IInputProps<T> extends IChildlessComponentProps {
    defaultValue?: T;
    onValueChange?: InputChange<T>;
    disabled?: boolean;
    error?: string;
}

type InputChange<T> = (value: T) => void;

interface IInputSpanProps extends IComponentProps {
    width?: string;
    maxWidth?: string;
    colorScheme: ColorScheme;
    error?: string;
}

export function InputSpan(props: IInputSpanProps): JSX.Element {

    const colorSchemeClassName = getColorSchemeClassName(
        "OODCoreComponentInputSpan",
        props.colorScheme,
        true
    );

    const inputInvalidColorScheme = props.error ? getColorSchemeClassName("", ColorScheme.Error, true): "";
    const spanInvalidColorScheme = props.error ? getColorSchemeClassName("", ColorScheme.Error): "";

    const validitySpan = 
        <span className={getClassName("OODCoreComponentInputValidationSpan", spanInvalidColorScheme)}>
            { props.error ?? null }
        </span>

    return(
        <div className={getClassName("OODCoreComponentInputDiv", props.className)} >
            <div className={getClassName(colorSchemeClassName, inputInvalidColorScheme)}>
                {props.children}
            </div>
            {props.error ? validitySpan : null}
        </div>
    );
}

export function createOnChange<T>(onChange: InputChange<T>): React.ChangeEventHandler<HTMLInputElement> {
    return (event: ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value as T);
}
