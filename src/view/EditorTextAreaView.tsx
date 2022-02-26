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
    getHeading
 } from "../edit/EditorFunctions";

// syntax highlighter imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// highlighter styles
import { coy as s } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const EditorTextAreaView: React.FunctionComponent = () => {
    const { content, preview, cursorPositionStart, cursorPositionEnd, onChange, onFocus, onBlur, setContent } = useContext(EditorTextAreaContext);

    // 지원하려는 Text Editing 기능
    // 
    const onClickBold = () => {
        let newContent = getBoldText(cursorPositionStart, content);
        
        setContent(newContent);
        document.getElementById('oom-editor')!.innerText = newContent;
    }

    const onClickItalic = () => {
        let newContent = getItalicText(cursorPositionStart, content);
        
        setContent(newContent);
        document.getElementById('oom-editor')!.innerText = newContent;
    }

    const onClickStrength = () => {
        let newContent = getStrengthText(cursorPositionStart, content);
        
        setContent(newContent);
        document.getElementById('oom-editor')!.innerText = newContent;
    }

    const onClickCodeBlock = () => {
        let newContent = getCodeBlock(cursorPositionStart, content);
        
        setContent(newContent);
        document.getElementById('oom-editor')!.innerText = newContent;
    }
    
    const onClickHeading = () => {
        let newContent = getHeading(cursorPositionStart, content);
        
        setContent(newContent);
        document.getElementById('oom-editor')!.innerText = newContent;
    }

    return (
        <div>
            <textarea onChange={onChange} value={content} onFocus={onFocus} onBlur={onBlur} id="oom-editor"></textarea>
            <button onClick={onClickBold}>Bold</button>
            <button onClick={onClickItalic}>Italic</button>
            <button onClick={onClickStrength}>Strength</button>
            <button onClick={onClickCodeBlock}>Code Block</button>

            <button onClick={onClickHeading}>Heading</button>

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