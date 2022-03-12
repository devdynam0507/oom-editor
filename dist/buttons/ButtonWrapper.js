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
import { useCallback, useContext } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import { BoldButtonType, ItalicButtonType, CodeBlockButtonType, LargeHeadingButtonType, QuoteButtonType, StrengthButtonType } from "./ButtonTypes";
import { BoldButton } from "./BoldButton";
import { ItalicButton } from "./ItalicButton";
import { CodeBlockButton } from "./CodeBlockButton";
import { LargeHeadingButton } from "./LargeHeadingButton";
import { QuoteButton } from "./QuoteButton";
import { StrengthButton } from "./StrengthButton";
import Styles from './ButtonStyle.module.css';
export var ButtonWrapper = function (_a) {
    var buttonTypes = _a.buttonTypes, textAreaRef = _a.textAreaRef;
    var _b = useContext(EditorTextAreaContext), content = _b.content, preview = _b.preview, cursorPositionStart = _b.cursorPositionStart, cursorPositionEnd = _b.cursorPositionEnd, onChange = _b.onChange, onFocus = _b.onFocus, onBlur = _b.onBlur, setContent = _b.setContent;
    var focusToEditor = useCallback(function (locationOfCursorPos) {
        setTimeout(function () {
            var _a, _b;
            (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            (_b = textAreaRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }, 0);
    }, [textAreaRef]);
    var handleClickedButton = useCallback(function (editResult) {
        setContent(editResult.newContent);
        textAreaRef.current.innerText = editResult.newContent;
        focusToEditor(editResult.startFocusPosition);
    }, [textAreaRef, focusToEditor]);
    return (_jsx("div", __assign({ className: Styles.buttonBar }, { children: buttonTypes && buttonTypes.map(function (button) {
            if (button === BoldButtonType) {
                return _jsx(BoldButton, { title: "굵기", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
            if (button === ItalicButtonType) {
                return _jsx(ItalicButton, { title: "기울이기", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
            if (button === CodeBlockButtonType) {
                return _jsx(CodeBlockButton, { title: "코드블럭", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
            if (button === LargeHeadingButtonType) {
                return _jsx(LargeHeadingButton, { title: "표제", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
            if (button === QuoteButtonType) {
                return _jsx(QuoteButton, { title: "인용", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
            if (button === StrengthButtonType) {
                return _jsx(StrengthButton, { title: "취소선", locationOfCursorPos: cursorPositionStart, content: content, handleClickedButton: handleClickedButton }, void 0);
            }
        }) }), void 0));
};
