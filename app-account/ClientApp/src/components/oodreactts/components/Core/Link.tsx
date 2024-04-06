import * as React from "react";
import { IComponentProps, getClassName } from "../Component";

interface ILinkProps extends IComponentProps {
    href?: string
}

interface IComponentStyle {
    width?: string;
}

export function Link(props: ILinkProps) {
    let className = "OODCoreComponentLink";

    return (
        <a href={props.href} className={getClassName(className, props.className)} >
            {props.children}
        </a>
    );
}
