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
import { useContext } from "react";
import { EditorTitleContext } from "../controller/EditorTitleController";
import Styles from './EditorTitleView.module.css';
export var EditorTitleView = function () {
    var _a = useContext(EditorTitleContext), title = _a.title, placeholder = _a.placeholder, onChange = _a.onChange;
    return (_jsxs("div", { children: [_jsx("input", { placeholder: placeholder, onChange: onChange, className: Styles.title }, void 0), _jsx("p", __assign({ className: Styles.titlePreview }, { children: title }), void 0)] }, void 0));
};
