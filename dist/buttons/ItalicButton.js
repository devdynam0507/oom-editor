var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Styles from './ButtonStyle.module.css';
import { MdFormatItalic } from 'react-icons/md';
import { getItalicText } from '../edit/EditorFunctions';
export var ItalicButton = function (buttonProps) {
    var onClickItalic = function () {
        var editResult = getItalicText(buttonProps.locationOfCursorPos, buttonProps.content);
        buttonProps.handleClickedButton(editResult);
    };
    return (_jsx("button", __assign({ onClick: onClickItalic, className: Styles.editorButton, title: buttonProps.title }, { children: _jsx(MdFormatItalic, { className: Styles.editorButtonSvg }, void 0) }), void 0));
};
