import * as React from "react";
// import { Compose } from '../Library/Compose';
import "../../styles/Button.css";
import "../../styles/Input.css";
import { getClassName, IChildlessComponentProps } from "../Component";

interface ISubmitInputProps extends IChildlessComponentProps {
    value?: string
}

export function SubmitInput(props: ISubmitInputProps): JSX.Element {
    return (
        <input className={getClassName("OODCoreComponentButton", props.className)} type={"submit"} value={props.value} />
    );
}
