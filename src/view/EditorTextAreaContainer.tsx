import { EditorTextAreaView } from "./EditorTextAreaView";
import React, { FunctionComponent, useContext } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";


export const EditorTextAreaContainer: React.FunctionComponent = () => {
    const { 
        content, 
        preview, 
        cursorPositionStart, 
        cursorPositionEnd,
        onChange, 
        onFocus, 
        onBlur, 
        setContent 
    } = useContext(EditorTextAreaContext);

}