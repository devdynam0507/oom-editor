import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export { 
  ButtonWrapper,
  BoldButtonType,
  CodeBlockButtonType,
  ItalicButtonType,
  LargeHeadingButtonType,
  QuoteButtonType,
  StrengthButtonType
 } from './buttons';

 export {
  EditorTextAreaContext,
  EditorTitleContext,
  EditorTextAreaProvider,
  EditorTitleProvider
 } from './controller'

 export {
  getBoldText,
  getStrengthText,
  getItalicText,
  getCodeBlock,
  getHeading,
  getQuote,
  getImageFormat,
  getMutlipleImageFormat,
} from './edit';
export type { EditResult } from './edit'
export { FileUploader } from './edit'

export type {
  EditorTextAreaModel,
  EditorTitleModel
} from './model';

export { BlockQuoteCustom } from "./styles"

export { 
    EditorTextAreaContainer,
    EditorTextAreaView,
    EditorTitleView,
} from './view'

export type {
  EditorViewProps,
  EditorProps,
} from './view'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
