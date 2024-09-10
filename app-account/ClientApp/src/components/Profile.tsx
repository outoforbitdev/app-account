import React, { Dispatch, useState } from "react";
import { IComponent, IComponentProps } from "./oodreactts/components/Component";
import { TextInput } from "./oodreactts/components/Inputs/TextInput";
import { PasswordInput } from "./oodreactts/components/Inputs/PasswordInput";
import { Button } from "./oodreactts/components/Core/Button";
import "../styles/Profile.css"
import "../styles/SettingsPage.css"
import { SubmitInput } from "./oodreactts/components/Inputs/SubmitInput";
import { Form } from "./oodreactts/components/Inputs/Form";
import { Link } from "./oodreactts/components/Core/Link";
import { SettingsPage } from "./SettingsPage";

interface IProfileProps extends IComponentProps {}

export const Profile: IComponent<IProfileProps> = (props: IProfileProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const labelWidth = "100px";
    const inputWidth = "200px";

    return(
        <SettingsPage>
            <Form 
                onSubmit={() => saveChanges(firstName, lastName)}
            >
                <table className="settings-table"><tbody>
                    <tr>
                        <td><label>First Name</label></td>
                        <td><TextInput onValueChange={setFirstName} /></td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td><TextInput onValueChange={setLastName} /></td>
                    </tr>
                    <tr>
                        <td><label>Theme</label></td>
                        <td><select>
                            <option>Light</option>
                            <option>Dark</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><SubmitInput value="Save Changes" /></td>
                    </tr>
                    </tbody></table>
            </Form>
        </SettingsPage>
    )
}

const saveChanges = (firstName: string, lastName: string) =>{
    console.log(firstName);
    console.log(lastName);
}