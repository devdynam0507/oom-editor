import React from "react";
import EditorTitleModel from "../model/EditorTitleModel";
declare const EditorTitleContext: React.Context<EditorTitleModel>;
interface Props {
    children: JSX.Element | JSX.Element[];
}
declare const EditorTitleProvider: ({ children }: Props) => JSX.Element;
export { EditorTitleContext, EditorTitleProvider };
