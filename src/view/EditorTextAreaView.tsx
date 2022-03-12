import React, { FunctionComponent, useCallback, useContext, useRef } from "react";
import { EditorTextAreaContext } from "../controller/EditorTextAreaController";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlockQuoteCustom } from "../styles/MarkdownStyleCustom";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {
    getMutlipleImageFormat
} from "../edit/EditorFunctions";

// syntax highlighter imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// highlighter styles
import { coy as s } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Styles from "./EditorTextAreaView.module.css";
import { FileUploader } from "../edit/FileUploader";
import { EditorViewProps } from "./EditorProps";

export const EditorTextAreaView: React.FunctionComponent<EditorViewProps> = (viewProps: EditorViewProps) => {
    const { content, preview, cursorPositionStart, cursorPositionEnd, onChange, onFocus, onBlur, setContent } = useContext(EditorTextAreaContext);

    if(viewProps.refOfTextarea.current !== null) {
        console.log(viewProps)

        viewProps.refOfTextarea!.current!.style.width = `${viewProps.width}`;
        viewProps.refOfTextarea!.current!.style.height = `${viewProps.height}`;
        viewProps.refOfTextarea!.current!.style.resize = "none";
    }

    // 마크다운 문자열이 추가 된 이후 textarea에 적절한 위치로 포커스를 두기 위해
    const focusToEditor = useCallback((locationOfCursorPos: number) => {
        setTimeout(() => {
            viewProps.refOfTextarea.current?.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            viewProps.refOfTextarea.current?.focus();
        }, 0);
    }, [viewProps])

    const onPressTab: React.KeyboardEventHandler<HTMLTextAreaElement> = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            const cursorStart = e.currentTarget.selectionStart;
            const cursorEnd = e.currentTarget.selectionEnd;
            let value = viewProps.refOfTextarea.current?.innerText;

            viewProps.refOfTextarea!.current!.innerText =
                value!.substring(0, cursorStart)
                + ' '
                + value!.substring(cursorEnd);
            e.currentTarget.selectionStart = e.currentTarget.selectionEnd = cursorStart + 1;

            return false;
        }
    }, [viewProps])

    const onDropEvent = useCallback((e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();

        if(e.dataTransfer.files) {
            const uploader: FileUploader = new FileUploader("http://localhost:8080/api/v1/image");
            uploader.sendUsingAxios(e.dataTransfer.files).then(images => {
                let editResult = getMutlipleImageFormat(content, images.data);
                handleChange(editResult);
            })
        }
    }, [viewProps, content]);

    const handleChange = (editResult: any) => {
        setContent(editResult.newContent);
        viewProps.refOfTextarea.current!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }

    return (
        <>
            <textarea
                onChange={onChange}
                value={content}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onPressTab}
                id="oom-editor"
                ref={viewProps.refOfTextarea}
                className={Styles.body}
                contentEditable="true"
                onDrop={onDropEvent}
                onDragEnter={(e) => { e.preventDefault(); }}
                suppressContentEditableWarning={true}
            ></textarea>
            <ReactMarkdown
                components={{
                    code: ({ node, inline, className, children, ...props }) => {
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
        </>

    )
}