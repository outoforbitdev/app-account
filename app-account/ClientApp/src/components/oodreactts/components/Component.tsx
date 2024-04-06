import React from "react";
import {isNullOrEmpty} from "../../oodts/core";

export interface IChildlessComponentProps{
    className?: string;
}

export interface IComponentProps extends IChildlessComponentProps {
    children?: React.ReactNode;
    
}

export interface IComponent<p> extends React.FunctionComponent<p> {

}

export function getClassName(standardClassNames?: string, additionalClassNames?: string): string {
    return combineClassNames(standardClassNames, additionalClassNames);
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