import * as React from "react";
import { IComponentProps } from "../Component";
import { Button } from "./Button";

interface IButtonLinkProps extends IComponentProps {
    seamless?: boolean;
    width?: string;
    link: string;
}

export function ButtonLink(props: IButtonLinkProps) {
    return (
        <Button
            seamless={props.seamless}
            width={props.width}
            onClick={() => (window.location.href = props.link)}
            classNames={props.classNames}
        >
            {props.children}
        </Button>
    );
}
