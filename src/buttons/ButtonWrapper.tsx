import React, { useCallback, useContext } from "react";
import { EditResult } from "../edit/EditorFunctions";
import { ButtonWrapperProps } from "./ButtonProps";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import {
  BoldButtonType,
  ItalicButtonType,
  CodeBlockButtonType,
  LargeHeadingButtonType,
  QuoteButtonType,
  StrengthButtonType  
} from "./ButtonTypes";
import { BoldButton } from "./BoldButton";
import { ItalicButton } from "./ItalicButton";
import { CodeBlockButton } from "./CodeBlockButton";
import { LargeHeadingButton } from "./LargeHeadingButton";
import { QuoteButton } from "./QuoteButton";
import { StrengthButton } from "./StrengthButton";
import Styles from "./ButtonStyle.module.css";

export const ButtonWrapper: React.FunctionComponent<ButtonWrapperProps> = ({ buttonTypes, textAreaRef }: ButtonWrapperProps) => {
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

    const focusToEditor = useCallback((locationOfCursorPos: number) => {
        setTimeout(() => {
            textAreaRef.current?.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            textAreaRef.current?.focus();
        }, 0);
    }, [textAreaRef]);
    
    const handleClickedButton = useCallback((editResult: EditResult): void => {
        setContent(editResult.newContent);
        textAreaRef.current!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }, [textAreaRef, focusToEditor]);

    return (
        <div className={Styles.buttonBar}>
            {buttonTypes && buttonTypes.map(button => {
                if(button === BoldButtonType) {
                    return <BoldButton 
                        title={"굵기"} 
                        locationOfCursorPos={cursorPositionStart} 
                        content={content} 
                        handleClickedButton={handleClickedButton}/>
                }
                if(button === ItalicButtonType) {
                    return <ItalicButton 
                        title={"기울이기"} 
                        locationOfCursorPos={cursorPositionStart} 
                        content={content} 
                        handleClickedButton={handleClickedButton}/>
                }
                if(button === CodeBlockButtonType) {
                    return <CodeBlockButton
                        title={"코드블럭"}
                        locationOfCursorPos={cursorPositionStart}
                        content={content}
                        handleClickedButton={handleClickedButton}/>
                }
                if(button === LargeHeadingButtonType) {
                    return <LargeHeadingButton
                        title={"표제"}
                        locationOfCursorPos={cursorPositionStart}
                        content={content}
                        handleClickedButton={handleClickedButton}/>
                }
                if(button === QuoteButtonType) {
                    return <QuoteButton
                        title={"인용"}
                        locationOfCursorPos={cursorPositionStart}
                        content={content}
                        handleClickedButton={handleClickedButton}/>
                }
                if(button === StrengthButtonType) {
                    return <StrengthButton
                        title={"취소선"}
                        locationOfCursorPos={cursorPositionStart}
                        content={content}
                        handleClickedButton={handleClickedButton}/>
                }
            })}
        </div>
    )
}