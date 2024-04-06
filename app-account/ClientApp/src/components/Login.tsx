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

export const Login: IComponent<ILoginProps> = (props: ILoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="login-page">
            <Form 
                className="login-container"
                onSubmit={() => submitLogin(username, password)}>
                Out of Orbit Development<br />
                <TextInput label="Username" onValueChange={setUsername} breakLabel className="login-input" /> <br />
                <PasswordInput label="Password" showable onValueChange={setPassword} breakLabel className="login-input" /><br />
                <SubmitInput value="Login" />
                <Link href="register">Create Account</Link>
            </Form>
        </div>
    )
}

const submitLogin = (username: string, password: string) => {
    console.log(username);
    console.log(password);
}