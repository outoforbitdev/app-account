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
import { isNullOrEmpty } from "./oodts/core";

interface ILoginProps extends IComponentProps {}

export const CreateAccount: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    
    const isPasswordValid = !isNullOrEmpty(password);
    const isConfirmPasswordValid = validatePasswordConfirmation(password, confirmPassword);

    const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;

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
                    setIsValid={setIsEmailValid}
                    error={isEmailValid ? undefined : "Please enter a valid email"}
                />
                <label>Password</label>
                <PasswordInput 
                    showable
                    onValueChange={setPassword}
                    className="login-input"
                    error={isPasswordValid ? undefined : "Password must not be empty"}
                />
                <label>Confirm Password</label>
                <PasswordInput
                    showable 
                    onValueChange={setConfirmPassword} 
                    className="login-input"
                    error={isConfirmPasswordValid ? undefined : "Passwords must match"}
                />
                <SubmitInput value="Create Account" disabled={!isFormValid} />
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
        return true
    }
    return false;
}