import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdOutlineCode } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';
import { getCodeBlock } from '../edit/EditorFunctions';

export const CodeBlockButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickCodeBlock: React.MouseEventHandler<HTMLButtonElement> = () => {
        let editResult = getCodeBlock(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    }
    
    return (
        <button
            onClick={onClickCodeBlock}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <MdOutlineCode className={Styles.editorButtonSvg} />
        </button>
    )
}