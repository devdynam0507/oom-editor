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
import './App.css';
import { EditorTitleProvider } from './controller/EditorTitleController';
import { EditorTitleView } from './view/EditorTitleView';
import { EditorTextAreaProvider } from './controller/EditorTextAreaController';
import { EditorTextAreaContainer } from './view/EditorTextAreaContainer';
import { BoldButtonType, CodeBlockButtonType, ItalicButtonType, LargeHeadingButtonType, QuoteButtonType, StrengthButtonType } from './buttons/ButtonTypes';
function App() {
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx(EditorTitleProvider, { children: _jsx(EditorTitleView, {}, void 0) }, void 0), _jsx(EditorTextAreaProvider, { children: _jsx(EditorTextAreaContainer, { buttonTypes: [
                        BoldButtonType, CodeBlockButtonType, ItalicButtonType, LargeHeadingButtonType, StrengthButtonType, QuoteButtonType
                    ], width: 300, height: 500 }, void 0) }, void 0)] }), void 0));
}
export default App;
