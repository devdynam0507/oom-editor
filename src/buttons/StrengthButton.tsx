import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatStrikethrough } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';
import { getStrengthText } from '../edit/EditorFunctions';

export const StrengthButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickStrength: React.MouseEventHandler<HTMLButtonElement> = () => {
        let editResult = getStrengthText(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    };

    return (
        <button
            onClick={onClickStrength}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <MdFormatStrikethrough className={Styles.editorButtonSvg} />
        </button>
    )
}