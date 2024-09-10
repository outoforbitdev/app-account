import React, { useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Login.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";
import { EmailInput } from "./oodreactts/components/Inputs/EmailInput";

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
            Out of Orbit Development
            <Form className="login-container">
                <label>Email</label>
                <EmailInput
                    // className="login-input"
                    onValueChange={setUsername}
                />
                <label>Password</label>
                <PasswordInput showable onValueChange={setPassword} className="login-input" />
                <label>Confirm Password</label>
                <PasswordInput
                    showable 
                    onValueChange={setConfirmPassword} 
                    checkValidity={() => validatePasswordConfirmation(password, confirmPassword)} 
                    className="login-input" 
                />
                <SubmitInput value="Create Account" />
            </Form>
            <Link href="/login">Login</Link>
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