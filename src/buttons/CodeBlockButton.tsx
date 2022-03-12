import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdOutlineCode } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';

export const CodeBlockButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <MdOutlineCode className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}