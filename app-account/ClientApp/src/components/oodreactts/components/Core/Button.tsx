import * as React from "react";
import { IComponentProps, getClassName } from "../Component";
import "../../styles/Button.css";

interface IButtonProps extends IComponentProps {
    onClick?: () => void;
    seamless?: boolean;
    width?: string;
}

interface IComponentStyle {
    width?: string;
}

export function Button(props: IButtonProps) {
    let className = "OODCoreComponentButton";
    className = props.seamless ? "OODCoreComponentButtonSeamless " + className : className;
    const style: IComponentStyle = {};
    if (props.width) {
        style.width = props.width;
    }

    return (
        <button onClick={props.onClick} className={getClassName(className, props.classNames)} style={style}>
            {props.children}
        </button>
    );
}
