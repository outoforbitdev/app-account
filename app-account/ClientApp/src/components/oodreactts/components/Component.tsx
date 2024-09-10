import React from "react";
import {isNullOrEmpty} from "../../oodts/core";

export enum ColorScheme {
    Primary = "Primary",
    Secondary = "Secondary",
    Tertiary = "Tertiary",
    AccentPrimary = "AccentPrimary",
    AccentSecondary = "AccentSecondary",
    Error = "Error",
    ErrorWithBackground = "ErrorWithBackground",
}

export interface IChildlessComponentProps{
    className?: string;
    colorScheme?: ColorScheme;
}

export interface IComponentProps extends IChildlessComponentProps {
    children?: React.ReactNode;
}

export interface IComponent<p> extends React.FunctionComponent<p> {

}

export function getColorSchemeClassName(coreClassName: string, colorScheme: ColorScheme, styleBorder?: boolean, styleHover?: boolean) {
    // console.log(coreClassName + " " + styleBorder);
    const colorSchemeClassName = "OODCoreColorScheme" + colorScheme;
    const colorSchemeClassNameBorder = 
        colorSchemeClassName + 
        (styleBorder ? " " + colorSchemeClassName + "Border": "");
    const colorSchemeClassNameHover = 
        colorSchemeClassName + 
        (styleHover ? " " + colorSchemeClassName + "Hover": "");

    return getClassName(coreClassName, colorSchemeClassNameHover);
}

export function getClassName(coreClassName?: string, additionalClassNames?: string): string {
    const allClassNames =  combineClassNames(coreClassName, additionalClassNames)
    return allClassNames;
}

function combineClassNames(firstNames?: string, secondNames?: string): string {
    if (!isNullOrEmpty(firstNames)) {
        if (!isNullOrEmpty(secondNames)) {
            return firstNames + " " + secondNames;
        }
        return firstNames!;
    } else if (!isNullOrEmpty(secondNames)) {
        return secondNames!;
    }
    return "";
}