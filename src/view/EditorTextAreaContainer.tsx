import { EditorTextAreaView } from "./EditorTextAreaView";
import React, { FunctionComponent, useContext, useRef } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import { EditorProps } from "./EditorProps";
import { ButtonWrapper } from "../buttons/ButtonWrapper";
import Styles from './EditorTextAreaView.module.css';

export const EditorTextAreaContainer: React.FunctionComponent<EditorProps> = ({ buttonTypes, width, height }: EditorProps) => {
    const oomEditorRef = useRef<HTMLTextAreaElement>(null);
    console.log(width);
    console.log(height);
    return (
        <div className={Styles.container}>
            <ButtonWrapper buttonTypes={buttonTypes} textAreaRef={oomEditorRef}/>
            <EditorTextAreaView 
                width={width} 
                height={height}
                refOfTextarea={oomEditorRef} />
        </div>
    )
}