import React, { useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextField } from "./oodreactts/components/InputField/TextField";
import { PasswordField } from "./oodreactts/components/InputField/PasswordField";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Login.css"

interface ILoginProps extends IComponentProps {}

export const CreateAccount: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <div className="login-page">
            <div className="login-container">
                Out of Orbit Development<br />
                <TextField label="Username" onValueChange={setUsername} breakLabel className="login-input" /> <br />
                <PasswordField label="Password" showable onValueChange={setPassword} breakLabel className="login-input" /><br />
                <PasswordField 
                    label= "Confirm Password" 
                    showable 
                    onValueChange={setConfirmPassword} 
                    onQuickValidate={() => validatePasswordConfirmation(password, confirmPassword)}
                    breakLabel 
                    className="login-input" 
                /> <br />
                <Button onClick={() => submitAccountCreation(username, password)}>Create Account</Button>
            </div>
        </div>
    )
}

const submitAccountCreation = (username: string, password: string) => {
    console.log(username);
    console.log(password);
}

const validatePasswordConfirmation = (firstPassword: string, secondPassword: string) => {
    return firstPassword === secondPassword
}