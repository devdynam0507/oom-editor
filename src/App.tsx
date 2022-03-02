import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EditorTitleProvider } from './controller/EditorTitleController';
import { EditorTitleView } from './view/EditorTitleView';
import { EditorTextAreaView } from './view/EditorTextAreaView';
import { EditorTextAreaProvider } from './controller/EditorTextAreaController';

function App() {
  return (
    <div className="App">
      <EditorTitleProvider>
        <EditorTitleView/>
      </EditorTitleProvider>
      <EditorTextAreaProvider>
        <EditorTextAreaView/>
      </EditorTextAreaProvider>
    </div>
  );
}

export default App;
