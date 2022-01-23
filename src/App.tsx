import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EditorTitleProvider } from './controller/EditorTitleController';
import { EditorTitleView } from './view/EditorTitleView';

function App() {
  return (
    <EditorTitleProvider>
      <EditorTitleView/>
    </EditorTitleProvider>
  );
}

export default App;
