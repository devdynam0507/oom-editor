import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatItalic } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';
import { getItalicText } from '../edit/EditorFunctions';

export const ItalicButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickItalic: React.MouseEventHandler<HTMLButtonElement> = () => {
        let editResult = getItalicText(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    };

    return (
        <button
            onClick={onClickItalic}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <MdFormatItalic className={Styles.editorButtonSvg} />
        </button>
    )
}