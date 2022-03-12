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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useContext } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlockQuoteCustom } from "../styles/MarkdownStyleCustom";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { getMutlipleImageFormat } from "../edit/EditorFunctions";
// syntax highlighter imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// highlighter styles
import { coy as s } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Styles from './EditorTextAreaView.module.css';
import { FileUploader } from "../edit/FileUploader";
export var EditorTextAreaView = function (viewProps) {
    var _a = useContext(EditorTextAreaContext), content = _a.content, preview = _a.preview, cursorPositionStart = _a.cursorPositionStart, cursorPositionEnd = _a.cursorPositionEnd, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, setContent = _a.setContent;
    if (viewProps.refOfTextarea.current !== null) {
        console.log(viewProps);
        viewProps.refOfTextarea.current.style.width = "".concat(viewProps.width);
        viewProps.refOfTextarea.current.style.height = "".concat(viewProps.height);
        viewProps.refOfTextarea.current.style.resize = "none";
    }
    // 마크다운 문자열이 추가 된 이후 textarea에 적절한 위치로 포커스를 두기 위해
    var focusToEditor = useCallback(function (locationOfCursorPos) {
        setTimeout(function () {
            var _a, _b;
            (_a = viewProps.refOfTextarea.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            (_b = viewProps.refOfTextarea.current) === null || _b === void 0 ? void 0 : _b.focus();
        }, 0);
    }, [viewProps]);
    var onPressTab = useCallback(function (e) {
        var _a;
        if (e.key === 'Tab') {
            e.preventDefault();
            var cursorStart = e.currentTarget.selectionStart;
            var cursorEnd = e.currentTarget.selectionEnd;
            var value = (_a = viewProps.refOfTextarea.current) === null || _a === void 0 ? void 0 : _a.innerText;
            viewProps.refOfTextarea.current.innerText =
                value.substring(0, cursorStart)
                    + ' '
                    + value.substring(cursorEnd);
            e.currentTarget.selectionStart = e.currentTarget.selectionEnd = cursorStart + 1;
            return false;
        }
    }, [viewProps]);
    var onDropEvent = useCallback(function (e) {
        e.preventDefault();
        if (e.dataTransfer.files) {
            var uploader = new FileUploader("http://localhost:8080/api/v1/image");
            uploader.sendUsingAxios(e.dataTransfer.files).then(function (images) {
                var editResult = getMutlipleImageFormat(content, images.data);
                handleChange(editResult);
            });
        }
    }, [viewProps, content]);
    var handleChange = function (editResult) {
        setContent(editResult.newContent);
        viewProps.refOfTextarea.current.innerText = editResult.newContent;
        focusToEditor(editResult.startFocusPosition);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: Styles.container }, { children: _jsx("textarea", { onChange: onChange, value: content, onFocus: onFocus, onBlur: onBlur, onKeyDown: onPressTab, id: "oom-editor", ref: viewProps.refOfTextarea, className: Styles.body, contentEditable: "true", onDrop: onDropEvent, onDragEnter: function (e) { e.preventDefault(); }, suppressContentEditableWarning: true }, void 0) }), void 0), _jsx(ReactMarkdown, __assign({ components: {
                    code: function (_a) {
                        var node = _a.node, inline = _a.inline, className = _a.className, children = _a.children, props = __rest(_a, ["node", "inline", "className", "children"]);
                        var match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (_jsx(SyntaxHighlighter, { children: String(children).replace(/\n$/, ''), language: match[1], style: s, PreTag: "div" }, void 0)) : (_jsx("code", __assign({ className: className }, props, { children: children }), void 0));
                    },
                    blockquote: BlockQuoteCustom
                }, remarkPlugins: [remarkGfm, remarkBreaks] }, { children: preview }), void 0)] }, void 0));
};
