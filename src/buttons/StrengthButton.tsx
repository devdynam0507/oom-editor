import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatStrikethrough } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';

export const StrengthButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <MdFormatStrikethrough className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}