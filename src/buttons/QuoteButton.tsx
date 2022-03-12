import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatQuote } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';

export const QuoteButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <MdFormatQuote className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}