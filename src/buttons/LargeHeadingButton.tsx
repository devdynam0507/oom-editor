import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { BiHeading } from 'react-icons/bi';
import { ButtonProps } from './ButtonProps';

export const LargeHeadingButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    
    return (
        <div className={Styles.buttonBar}>
            <button
                onClick={buttonProps.onClick}
                className={Styles.editorButton}
                title={buttonProps.title}>
                <BiHeading className={Styles.editorButtonSvg} />
            </button>
        </div>
    )
}