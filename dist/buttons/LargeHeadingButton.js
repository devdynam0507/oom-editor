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
import { BiHeading } from 'react-icons/bi';
import { getHeading } from '../edit/EditorFunctions';
export var LargeHeadingButton = function (buttonProps) {
    var onClickHeading = function () {
        var editResult = getHeading(buttonProps.locationOfCursorPos, buttonProps.content);
        buttonProps.handleClickedButton(editResult);
    };
    return (_jsx("button", __assign({ onClick: onClickHeading, className: Styles.editorButton, title: buttonProps.title }, { children: _jsx(BiHeading, { className: Styles.editorButtonSvg }, void 0) }), void 0));
};
