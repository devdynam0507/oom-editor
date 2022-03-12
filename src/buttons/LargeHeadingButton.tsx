import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { BiHeading } from 'react-icons/bi';
import { ButtonProps } from './ButtonProps';
import { getHeading } from '../edit/EditorFunctions';

export const LargeHeadingButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickHeading: React.MouseEventHandler<HTMLButtonElement> = () => {
        let editResult = getHeading(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    };

    return (
        <button
            onClick={onClickHeading}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <BiHeading className={Styles.editorButtonSvg} />
        </button>
    )
}