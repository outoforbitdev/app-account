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

export const Login: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);
    
    return(
        <div className="login-page">
        Out of Orbit Development
            <Form 
                className="login-container"
                onSubmit={() => submitLogin(username, password)}>
                <label>Email</label>
                <TextInput onValueChange={setUsername} className="login-input" />
                <label>Password</label>
                <PasswordInput showable onValueChange={setPassword} className="login-input" />
                <SubmitInput value="Login" disabled={!valid}/>
            </Form>
            <Link href="register">Create Account</Link>
        </div>
    )
}

const submitLogin = (username: string, password: string) => {
    console.log(username);
    console.log(password);
    document.documentElement.setAttribute('data-theme', 'OODCoreStyleThemeLight');
}