import React, { createContext, useState } from "react";
import EditorTextAreaModel from "../model/EditorTextAreaModel";

const EditorTextAreaContext = createContext<EditorTextAreaModel>({
    content: "",
    preview: "",
    cursorPositionStart: 0,
    cursorPositionEnd: 0,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
    onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => {},
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => {},
    setContent: (content: string) => {}
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

const EditorTextAreaProvider = ({ children }: Props): JSX.Element => {
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState('');
    const [cursorPositionStart, setCursorPositionStart] = useState(0);
    const [cursorPositionEnd, setCursorPositionEnd] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
        setPreview(e.currentTarget.value)

        setCursorPositionStart(e.currentTarget.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd);
    }

    const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setCursorPositionStart(e.currentTarget.selectionStart == null ? 0 : e.target.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd == null ? 0 : e.target.selectionEnd);
    }

    const onBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setCursorPositionStart(e.currentTarget.selectionStart == null ? 0 : e.target.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd == null ? 0 : e.target.selectionEnd);
    }

    return (
        <EditorTextAreaContext.Provider
        value={{
            content,
            preview,
            cursorPositionStart,
            cursorPositionEnd,
            onChange,
            onFocus,
            onBlur,
            setContent
        }}>
            {children}
        </EditorTextAreaContext.Provider>
    );
}

export { EditorTextAreaContext, EditorTextAreaProvider }