import React from "react"
import { EditResult } from "../edit/EditorFunctions";

interface ButtonWrapperProps {
    buttonTypes: any[],
    textAreaRef: React.RefObject<HTMLTextAreaElement>
}

interface ButtonProps {
    title: string,
    handleClickedButton: (editResult: EditResult) => void,
    locationOfCursorPos: number,
    content: string
}

export type {
    ButtonWrapperProps,
    ButtonProps
}