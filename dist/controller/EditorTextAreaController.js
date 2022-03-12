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
import { createContext, useState } from "react";
var EditorTextAreaContext = createContext({
    content: "",
    preview: "",
    cursorPositionStart: 0,
    cursorPositionEnd: 0,
    onChange: function (e) { },
    onFocus: function (e) { },
    onBlur: function (e) { },
    setContent: function (content) { }
});
var EditorTextAreaProvider = function (_a) {
    var children = _a.children;
    var _b = useState(''), content = _b[0], setContent = _b[1];
    var _c = useState(''), preview = _c[0], setPreview = _c[1];
    var _d = useState(0), cursorPositionStart = _d[0], setCursorPositionStart = _d[1];
    var _e = useState(0), cursorPositionEnd = _e[0], setCursorPositionEnd = _e[1];
    var onChange = function (e) {
        setContent(e.currentTarget.value);
        setPreview(e.currentTarget.value);
        setCursorPositionStart(e.currentTarget.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd);
    };
    var onFocus = function (e) {
        setCursorPositionStart(e.currentTarget.selectionStart == null ? 0 : e.target.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd == null ? 0 : e.target.selectionEnd);
    };
    var onBlur = function (e) {
        setCursorPositionStart(e.currentTarget.selectionStart == null ? 0 : e.target.selectionStart);
        setCursorPositionEnd(e.currentTarget.selectionEnd == null ? 0 : e.target.selectionEnd);
    };
    return (_jsx(EditorTextAreaContext.Provider, __assign({ value: {
            content: content,
            preview: preview,
            cursorPositionStart: cursorPositionStart,
            cursorPositionEnd: cursorPositionEnd,
            onChange: onChange,
            onFocus: onFocus,
            onBlur: onBlur,
            setContent: setContent
        } }, { children: children }), void 0));
};
export { EditorTextAreaContext, EditorTextAreaProvider };
