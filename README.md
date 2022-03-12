# oom markdown editor 
This is.... Awesome markdown editor!
# How to use oom editor?
```shell
npm i oom-editor
```
```typescript
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
```
# Flexible buttons!
```typescript
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
          BoldButtonType, CodeBlockButtonType, ItalicButtonType, /*LargeHeadingButtonType, StrengthButtonType, QuoteButtonType*/
        ]} 
        width={300}
        height={500}/>
      </EditorTextAreaProvider>
    </div>
  );
}
```
# Button types!
- **BoldButtonType**: Append to editor bold markdown format
- **CodeBlockButtonType**: Append to editor codeblock markdown format
- **ItalicButtonType**: Append to editor italic markdown format
- **LargeHeadingButtonType**: Append to editor heading markdown format
- **QuoteButtonType**: Append to editor quote markdown format
- **StrengthButtonType**: Append to editor strength format