import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { ButtonWrapper, BoldButtonType, CodeBlockButtonType, ItalicButtonType, LargeHeadingButtonType, QuoteButtonType, StrengthButtonType } from './buttons';
export { EditorTextAreaContext, EditorTitleContext, EditorTextAreaProvider, EditorTitleProvider } from './controller';
export { getBoldText, getStrengthText, getItalicText, getCodeBlock, getHeading, getQuote, getImageFormat, getMutlipleImageFormat, } from './edit';
export { FileUploader } from './edit';
export { BlockQuoteCustom } from "./styles";
export { EditorTextAreaContainer, EditorTextAreaView, EditorTitleView, } from './view';
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
