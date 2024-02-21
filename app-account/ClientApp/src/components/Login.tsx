import React, { useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextField } from "./oodreactts/components/InputField/TextField";
import { PasswordField } from "./oodreactts/components/InputField/PasswordField";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Login.css"

interface ILoginProps extends IComponentProps {}

export const Login: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="login-page">
            <div className="login-container">
                Out of Orbit Development<br />
                <TextField label="Username" onValueChange={setUsername} breakLabel className="login-input" /> <br />
                <PasswordField label="Password" showable onValueChange={setPassword} breakLabel className="login-input" /><br />
                <Button onClick={() => submitLogin(username, password)}>Login</Button>
            </div>
        </div>
    )
}

const submitLogin = (username: string, password: string) => {
    console.log(username);
    console.log(password);
}