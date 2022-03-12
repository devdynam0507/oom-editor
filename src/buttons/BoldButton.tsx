import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatBold } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';

export const BoldButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <MdFormatBold className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}
