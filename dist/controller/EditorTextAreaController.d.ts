import React from "react";
import EditorTextAreaModel from "../model/EditorTextAreaModel";
declare const EditorTextAreaContext: React.Context<EditorTextAreaModel>;
interface Props {
    children: JSX.Element | JSX.Element[];
}
declare const EditorTextAreaProvider: ({ children }: Props) => JSX.Element;
export { EditorTextAreaContext, EditorTextAreaProvider };
