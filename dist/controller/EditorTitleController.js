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
var EditorTitleContext = createContext({
    title: "",
    placeholder: "",
    onChange: function (e) { }
});
var EditorTitleProvider = function (_a) {
    var children = _a.children;
    var _b = useState(''), title = _b[0], setTitle = _b[1];
    var _c = useState(''), placeholder = _c[0], setPlaceholder = _c[1];
    var onChange = function (e) {
        setTitle(e.currentTarget.value);
    };
    return (_jsx(EditorTitleContext.Provider, __assign({ value: {
            title: title,
            placeholder: placeholder,
            onChange: onChange
        } }, { children: children }), void 0));
};
export { EditorTitleContext, EditorTitleProvider };
