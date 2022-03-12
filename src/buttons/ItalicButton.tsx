import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatItalic } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';

export const ItalicButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <MdFormatItalic className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}