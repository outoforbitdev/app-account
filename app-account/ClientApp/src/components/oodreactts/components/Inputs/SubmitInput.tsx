import * as React from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Button.css";
import "../../styles/Input.css";
import { ColorScheme, getClassName, getColorSchemeClassName, IChildlessComponentProps } from "../Component";

interface ISubmitInputProps extends IChildlessComponentProps {
    value?: string;
    disabled?: boolean;
}

export function SubmitInput(props: ISubmitInputProps): JSX.Element {
    const colorSchemeClassName = 
        getColorSchemeClassName(
            "OODCoreComponentButtonShared", 
            props.colorScheme ?? ColorScheme.Secondary, 
            true,
            !props.disabled
        );
    const coreClassName = getClassName(colorSchemeClassName, "OODCoreComponentButton");
    const allClassNames = getClassName(coreClassName, props.className)

    return (
        <input className={allClassNames} type={"submit"} value={props.value} disabled={props.disabled} />
    );
}
