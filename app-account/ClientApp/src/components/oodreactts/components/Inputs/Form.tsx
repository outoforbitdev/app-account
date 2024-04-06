import React from "react";
import { IComponent, IComponentProps } from "../Component";

interface IFormProps extends IComponentProps {
    onSubmit?: () => void;
}

export const Form: IComponent<IFormProps> = (props: IFormProps) => {
    return(
        <form className={props.className} onSubmit={createOnSubmitHandler(props.onSubmit)}>{props.children}</form>
    );
}

const createOnSubmitHandler = (consumerSubmit?: () => void) => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        if (consumerSubmit){
            consumerSubmit();
        }
        e.preventDefault();
    }
    return onSubmitHandler;
}