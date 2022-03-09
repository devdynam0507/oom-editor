import React, { FunctionComponent, useCallback, useContext, useRef } from "react";
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
    getQuote,
    getImageFormat,
    getMutlipleImageFormat
} from "../edit/EditorFunctions";

// syntax highlighter imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// highlighter styles
import { coy as s } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Styles from './EditorTextAreaView.module.css';
import { MdFormatBold, MdFormatItalic, MdFormatQuote, MdFormatStrikethrough, MdOutlineCode } from 'react-icons/md';
import { BiHeading } from 'react-icons/bi';
import { FileUploader } from "../edit/FileUploader";

export const EditorTextAreaView: React.FunctionComponent = () => {
    const { content, preview, cursorPositionStart, cursorPositionEnd, onChange, onFocus, onBlur, setContent } = useContext(EditorTextAreaContext);
    const oomEditorRef = useRef<HTMLTextAreaElement>(null);

    // 마크다운 문자열이 추가 된 이후 textarea에 적절한 위치로 포커스를 두기 위해
    const focusToEditor = useCallback((locationOfCursorPos: number) => {
        setTimeout(() => {
            oomEditorRef.current?.setSelectionRange(locationOfCursorPos, locationOfCursorPos);
            oomEditorRef.current?.focus();
        }, 0);
    }, [oomEditorRef])

    const onPressTab: React.KeyboardEventHandler<HTMLTextAreaElement> = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            const cursorStart = e.currentTarget.selectionStart;
            const cursorEnd = e.currentTarget.selectionEnd;
            let value = oomEditorRef.current!.innerText;

            oomEditorRef.current!.innerText =
                value.substring(0, cursorStart)
                + ' '
                + value.substring(cursorEnd);
            e.currentTarget.selectionStart = e.currentTarget.selectionEnd = cursorStart + 1;

            return false;
        }
    }, [oomEditorRef])

    const onDropEvent = useCallback((e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();

        if(e.dataTransfer.files) {
            const uploader: FileUploader = new FileUploader("http://localhost:8080/api/v1/image");
            uploader.sendUsingAxios(e.dataTransfer.files).then(images => {
                let editResult = getMutlipleImageFormat(content, images.data);
                handleChange(editResult);
            })
        }
    }, [oomEditorRef, content]);

    const handleChange = (editResult: any) => {
        setContent(editResult.newContent);
        oomEditorRef.current!.innerText = editResult.newContent;

        focusToEditor(editResult.startFocusPosition);
    }

    const onClickBold: React.MouseEventHandler<HTMLButtonElement> = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        let editResult = getBoldText(cursorPositionStart, content);

        handleChange(editResult);
    }, [setContent, focusToEditor, cursorPositionStart, content, oomEditorRef])

    const onClickItalic: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        let editResult = getItalicText(cursorPositionStart, content);

        handleChange(editResult);
    }, [oomEditorRef, cursorPositionStart, content, setContent, focusToEditor])

    const onClickStrength: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        let editResult = getStrengthText(cursorPositionStart, content);

        handleChange(editResult);
    }, [oomEditorRef, cursorPositionStart, content, setContent, focusToEditor])

    const onClickCodeBlock: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        let editResult = getCodeBlock(cursorPositionStart, content);

        handleChange(editResult);
    }, [cursorPositionStart, content, setContent, oomEditorRef, focusToEditor])

    const onClickHeading: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        let editResult = getHeading(cursorPositionStart, content);

        handleChange(editResult);
    }, [cursorPositionStart, content, setContent, focusToEditor, oomEditorRef])

    const onClickQuote: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        let editResult = getQuote(cursorPositionStart, content);

        handleChange(editResult);
    }, [cursorPositionStart, content, setContent, oomEditorRef, focusToEditor])

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.buttonBar}>
                    <button
                        onClick={onClickBold}
                        className={Styles.editorButton}
                        title={"굵게"}>
                        <MdFormatBold className={Styles.editorButtonSvg} />
                    </button>
                    <button
                        onClick={onClickItalic}
                        className={Styles.editorButton}
                        title={"기울이기"}>
                        <MdFormatItalic className={Styles.editorButtonSvg} />
                    </button>
                    <button
                        onClick={onClickStrength}
                        className={Styles.editorButton}
                        title={"취소선"} >
                        <MdFormatStrikethrough className={Styles.editorButtonSvg} />
                    </button>
                    <button
                        onClick={onClickCodeBlock}
                        className={Styles.editorButton}
                        title={"코드 블록"}>
                        <MdOutlineCode className={Styles.editorButtonSvg} />
                    </button>
                    <button
                        onClick={onClickHeading}
                        className={Styles.editorButton}
                        title={"표제"}>
                        <BiHeading className={Styles.editorButtonSvg} />
                    </button>
                    <button
                        onClick={onClickQuote}
                        className={Styles.editorButton}
                        title={"인용"}>
                        <MdFormatQuote className={Styles.editorButtonSvg} />
                    </button>
                </div>
                <textarea
                    onChange={onChange}
                    value={content}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onPressTab}
                    id="oom-editor"
                    ref={oomEditorRef}
                    className={Styles.body}
                    contentEditable="true"
                    onDrop={onDropEvent}
                    onDragEnter={(e) => { e.preventDefault(); }}
                    suppressContentEditableWarning={true}
                ></textarea>

            </div>
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