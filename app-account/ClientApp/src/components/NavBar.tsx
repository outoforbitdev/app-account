import React, { Dispatch, useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/NavBar.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";
import { ButtonLink } from "./oodreactts/components/Core/ButtonLink";

interface INavBarProps extends IComponentProps {}

export const NavBar: IComponent<INavBarProps> = (props: INavBarProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return(
        <div className="nav-bar">
            <ButtonLink link="./profile" seamless>Basic Info</ButtonLink>
            <ButtonLink link="./contact" seamless>Contact Info</ButtonLink>
        </div>
    )
}

const saveChanges = (firstName: string, lastName: string) =>{
    console.log(firstName);
    console.log(lastName);
}