import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatBold } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';
import { getBoldText } from '../edit/EditorFunctions';

export const BoldButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickBold: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
        let editResult = getBoldText(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    };

    return (
        <button
            onClick={onClickBold}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <MdFormatBold className={Styles.editorButtonSvg} />
        </button>
    )
}
