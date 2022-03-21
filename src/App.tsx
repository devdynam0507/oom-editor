import React from 'react';
import logo from './logo.svg';

import './App.css';
import { EditorTitleProvider } from './controller/EditorTitleController';
import { EditorTitleView } from './view/EditorTitleView';
import { EditorTextAreaProvider } from './controller/EditorTextAreaController';
import { EditorTextAreaContainer } from './view/EditorTextAreaContainer';
import {
  BoldButtonType,
  CodeBlockButtonType,
  ItalicButtonType,
  LargeHeadingButtonType,
  QuoteButtonType,
  StrengthButtonType
} from './buttons/ButtonTypes'

function App() {
  return (
    <div className="App">
      <EditorTitleProvider>
        <EditorTitleView/>
      </EditorTitleProvider>
      <EditorTextAreaProvider>
        <EditorTextAreaContainer buttonTypes={[
          BoldButtonType, CodeBlockButtonType, ItalicButtonType, LargeHeadingButtonType, StrengthButtonType, QuoteButtonType
        ]} 
        width={300}
        height={500}/>
      </EditorTextAreaProvider>
    </div>
  );
}

export default App;
