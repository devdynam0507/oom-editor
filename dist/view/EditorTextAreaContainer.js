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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditorTextAreaView } from "./EditorTextAreaView";
import { useRef } from "react";
import { ButtonWrapper } from "../buttons/ButtonWrapper";
import Styles from './EditorTextAreaView.module.css';
export var EditorTextAreaContainer = function (_a) {
    var buttonTypes = _a.buttonTypes, width = _a.width, height = _a.height;
    var oomEditorRef = useRef(null);
    console.log(width);
    console.log(height);
    return (_jsxs("div", __assign({ className: Styles.container }, { children: [_jsx(ButtonWrapper, { buttonTypes: buttonTypes, textAreaRef: oomEditorRef }, void 0), _jsx(EditorTextAreaView, { width: width, height: height, refOfTextarea: oomEditorRef }, void 0)] }), void 0));
};
