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
import { MdFormatStrikethrough } from 'react-icons/md';
import { getStrengthText } from '../edit/EditorFunctions';
export var StrengthButton = function (buttonProps) {
    var onClickStrength = function () {
        var editResult = getStrengthText(buttonProps.locationOfCursorPos, buttonProps.content);
        buttonProps.handleClickedButton(editResult);
    };
    return (_jsx("button", __assign({ onClick: onClickStrength, className: Styles.editorButton, title: buttonProps.title }, { children: _jsx(MdFormatStrikethrough, { className: Styles.editorButtonSvg }, void 0) }), void 0));
};
