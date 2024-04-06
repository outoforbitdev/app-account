import React, { Dispatch, useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Account.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";

interface IAccountProps extends IComponentProps {}

export const Account: IComponent<IAccountProps> = (props: IAccountProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return(
        // <div className="login-page">
            <Form 
                className="account-container"
                onSubmit={() => saveChanges(firstName, lastName)}>
                <TextInput label="First Name" className="account-input" onValueChange={setFirstName} /> <br />
                <TextInput label="Last Name" className="account-input" onValueChange={setLastName} /> <br />
                <SubmitInput value="Save Changes" className="account-input" />
            </Form>
        // </div>
    )
}

const saveChanges = (firstName: string, lastName: string) =>{
    console.log(firstName);
    console.log(lastName);
}