import * as React from "react";
import { ColorScheme, IComponentProps, getClassName, getColorSchemeClassName } from "../Component";
import "../../styles/Button.css";

interface IButtonProps extends IComponentProps {
    onClick?: () => void;
    seamless?: boolean;
    width?: string;
    transparent?: boolean;
}

interface IComponentStyle {
    width?: string;
}

export function Button(props: IButtonProps) {
    const defaultColorScheme = props.transparent ? ColorScheme.Primary : ColorScheme.Secondary;
    const sharedClassName = getColorSchemeClassName(
        "OODCoreComponentButtonShared", 
        props.colorScheme ?? defaultColorScheme, 
        props.seamless ? false : true,
        props.transparent ? false : true,
    );
    const seamlessClassName = " OODCoreComponentButtonSeamless";
    const borderedClassName = " OODCoreComponentButton";
    const className = sharedClassName + (props.seamless ? seamlessClassName : borderedClassName);
    
    const style: IComponentStyle = {};
    if (props.width) {
        style.width = props.width;
    }

    return (
        <button type="button" onClick={props.onClick} className={getClassName(className, props.className)} style={style}>
            {props.children}
        </button>
    );
}
