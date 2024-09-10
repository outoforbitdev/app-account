import React, { Dispatch, useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/SettingsPage.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";
import { NavBar } from "./NavBar";

interface ISettingsPageProps extends IComponentProps {}

export const SettingsPage: IComponent<ISettingsPageProps> = (props: ISettingsPageProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return(
        <div className="page">
            <h1>Out of Orbit Dev</h1>
            <div className="content">
                <NavBar />
                <div className="children">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const saveChanges = (firstName: string, lastName: string) =>{
    console.log(firstName);
    console.log(lastName);
}