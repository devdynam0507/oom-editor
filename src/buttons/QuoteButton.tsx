import React, { FunctionComponent } from 'react';
import Styles from './ButtonStyle.module.css';
import { MdFormatQuote } from 'react-icons/md';
import { ButtonProps } from './ButtonProps';
import { getQuote } from '../edit/EditorFunctions';

export const QuoteButton: React.FunctionComponent<ButtonProps> = (buttonProps: ButtonProps) => {
    const onClickQuote: React.MouseEventHandler<HTMLButtonElement> = () => {
        let editResult = getQuote(buttonProps.locationOfCursorPos, buttonProps.content);

        buttonProps.handleClickedButton(editResult);
    };

    return (
        <button
            onClick={onClickQuote}
            className={Styles.editorButton}
            title={buttonProps.title}>
            <MdFormatQuote className={Styles.editorButtonSvg} />
        </button>
    )
}