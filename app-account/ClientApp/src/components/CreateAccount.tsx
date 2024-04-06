import React, { useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Login.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";

interface ILoginProps extends IComponentProps {}

export const CreateAccount: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <div 
            className="login-page"
            onSubmit={() => submitAccountCreation(username, password)}
        >
            <Form className="login-container">
                Out of Orbit Development<br />
                <TextInput 
                    breakLabel 
                    className="login-input" 
                    label="Username" 
                    maxWidth="100vw"
                    onValueChange={setUsername} 
                    width="300px"
                /> <br />
                <PasswordInput label="Password" showable onValueChange={setPassword} breakLabel className="login-input" /><br />
                <PasswordInput 
                    label= "Confirm Password" 
                    showable 
                    onValueChange={setConfirmPassword} 
                    checkValidity={() => validatePasswordConfirmation(password, confirmPassword)}
                    breakLabel 
                    className="login-input" 
                /> <br />
                <SubmitInput value="Create Account" />
                <Link href="/">Login</Link>
            </Form>
        </div>
    )
}

const submitAccountCreation = (username: string, password: string) => {
    console.log(username);
    console.log(password);
}

const validatePasswordConfirmation = (firstPassword: string, secondPassword: string) => {
    if (firstPassword === secondPassword) {
        return {valid: true}
    }
    return { valid: false, error: "Passwords must match"}
}