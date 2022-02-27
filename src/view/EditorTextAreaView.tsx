import React, { FunctionComponent, useContext } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlockQuoteCustom } from "../styles/MarkdownStyleCustom";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {
    getBoldText,
    getStrengthText,
    getItalicText,
    getCodeBlock,
    getHeading,
    getQuote
 } from "../edit/EditorFunctions";

// syntax highlighter imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// highlighter styles
import { coy as s } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const EditorTextAreaView: React.FunctionComponent = () => {
    const { content, preview, cursorPositionStart, cursorPositionEnd, onChange, onFocus, onBlur, setContent } = useContext(EditorTextAreaContext);

    // 마크다운 문자열이 추가 된 이후 textarea에 적절한 위치로 포커스를 두기 위해
    function focusToEditor(locationOfCursorPos: number) {
        const editorElement: HTMLTextAreaElement = document.getElementById('oom-editor') as HTMLTextAreaElement;

        setTimeout(() => {
            editorElement.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            editorElement.focus();
        }, 0);
    }

    function onPressTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if(e.key === 'Tab') {
            e.preventDefault();

            const cursorStart = e.currentTarget.selectionStart;
            const cursorEnd = e.currentTarget.selectionEnd;
            let value = document.getElementById('oom-editor')!.innerText;
            
            document.getElementById('oom-editor')!.innerText =
                value.substring(0, cursorStart) 
                + ' '
                + value.substring(cursorEnd); 
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = cursorStart + 1;
            
            return false;
        }
    }

    const onClickBold = (e: React.MouseEvent<HTMLButtonElement>) => {
        let editResult = getBoldText(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }

    const onClickItalic = () => {
        let editResult = getItalicText(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }

    const onClickStrength = () => {
        let editResult = getStrengthText(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }

    const onClickCodeBlock = () => {
        let editResult = getCodeBlock(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }
    
    const onClickHeading = () => {
        let editResult = getHeading(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;
        
        focusToEditor(editResult.startFocusPosition);
    }

    const onClickQuote = () => {
        let editResult = getQuote(cursorPositionStart, content);
        
        setContent(editResult.newContent);
        document.getElementById('oom-editor')!.innerText = editResult.newContent;
        
        focusToEditor(editResult.startFocusPosition);
    }

    return (
        <div>
            <textarea onChange={onChange} value={content} onFocus={onFocus} onBlur={onBlur} onKeyDown={onPressTab} id="oom-editor"></textarea>
            <button onClick={onClickBold}>Bold</button>
            <button onClick={onClickItalic}>Italic</button>
            <button onClick={onClickStrength}>Strength</button>
            <button onClick={onClickCodeBlock}>Code Block</button>

            <button onClick={onClickHeading}>Heading</button>
            <button onClick={onClickQuote}>Quote</button>

            <ReactMarkdown 
                components={{
                    code: ({node, inline, className, children, ...props}) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={s}
                                PreTag="div"
                                // {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            )
                    },
                    blockquote: BlockQuoteCustom
                }}
                remarkPlugins={[remarkGfm, remarkBreaks]}
            >{preview}</ReactMarkdown>
        </div>
    )
}