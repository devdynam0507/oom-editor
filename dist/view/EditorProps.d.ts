import React from "react";
/**
 * @field width: number of width pixel
 * @field height: number of height pixel
 * @field refOfTextarea: ref of textarea element
 * @field buttonTypes: type name of buttons
 * @link /buttons/ButtonTypes.tsx
 */
export interface EditorProps {
    width: number;
    height: number;
    buttonTypes: string[];
}
export interface EditorViewProps {
    width: number;
    height: number;
    refOfTextarea: React.RefObject<HTMLTextAreaElement>;
}
