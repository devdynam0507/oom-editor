import React from "react";
export default interface EditorTextAreaModel {
    content: string;
    preview: string;
    cursorPositionStart: number;
    cursorPositionEnd: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    setContent: (content: string) => void;
}
