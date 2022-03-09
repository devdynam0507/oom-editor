interface EditResult {
    newContent: string,
    startFocusPosition: number;
}

// 감싸는 마크다운 문법
function editWrap(cursorPositionStart: number, content: string, target: string): EditResult {
    let stringBlockIndex = 0;

    // 현재 커서 포지션에서 에서 마지막 문자열 위치를 찾는다.
    for(let i = cursorPositionStart; i < content.length; i++) {
        stringBlockIndex = i + 1;
        if(content.charAt(i) === ' ' || content.charAt(i) === "\n") {
            break;
        }
    }

    let otherBlockIndex = stringBlockIndex == content.length - 1 ? 0 : content.length;

    let newContent = content;
    if(content.length == cursorPositionStart) {
        newContent = content + target + target;
    }
    else {
        newContent = [
            content.slice(0, cursorPositionStart), 
            target, 
            content.slice(cursorPositionStart, stringBlockIndex == 0 ? content.length : stringBlockIndex), 
            target,
            otherBlockIndex > 0 ? content.slice(stringBlockIndex, otherBlockIndex) : ''
        ].join('');
    }

    return {
        newContent: newContent,
        startFocusPosition: cursorPositionStart + target.length
    };
}

// 감싸지 않는 마크다운 문법
function editSingle(cursorPositionStart: number, content: string, target: string): EditResult {
    return {
        newContent: [
            content.length > 0 ? "\n" : "",
            content.slice(0, cursorPositionStart),
            target + " ", 
            content.slice(cursorPositionStart, content.length),
        ].join(''),
        startFocusPosition: cursorPositionStart + target.length + 2
    }
}

/**
 * @param cursorPositionStart: 커서 시작위치
 * @param content: 전체 콘텐츠
 * @param target: 태그
 * @param targetFormat: 태그 안 포맷 문자열
 * @param targetFormatContent: 태그 안 포맷을 치환할 문자열
 * 
 * @example ![](%url%) -> ![](https://naver.com)
 */
function editFormat(
    content: string, 
    target: string, 
    targetFormat: string,
    targetFormatContent: string
) {
    const formatted = target.replace(targetFormat, targetFormatContent);
    const newContent = [ content, "\n", formatted ].join('');

    console.log(formatted);
    return {
        newContent: newContent,
        startFocusPosition: newContent.length
    };
}

function getBoldText(position: number, content: string): EditResult {
    return editWrap(position, content, '**');
}

function getStrengthText(position: number, content: string): EditResult {
    return editWrap(position, content, '~~');
}

function getItalicText(position: number, content: string): EditResult {
    return editWrap(position, content, '*')
}

function getCodeBlock(positon: number, content: string): EditResult {
    return editWrap(positon, content, '\`\`\`');
}

function getHeading(positon: number, content: string): EditResult {
    return editSingle(positon, content, '#');
}

function getQuote(position: number, content: string): EditResult {
    return editSingle(position, content, '>');
}

function getImageFormat(content: string, imageUrl: string): EditResult {
    return editFormat(
        content, '![](%url%)', '%url%', imageUrl
    );
}

function getMutlipleImageFormat(content: string, imageUrls: string[]): EditResult {
    let editResult = null;
    for(let i = 0; i < imageUrls.length; i++) {
        if(editResult === null) {
            editResult = getImageFormat(content, imageUrls[i]);
        }
        else {
            editResult = getImageFormat(editResult.newContent, imageUrls[i]);
        }
    }

    return editResult!;
}

export {
    getBoldText,
    getStrengthText,
    getItalicText,
    getCodeBlock,
    getHeading,
    getQuote,
    getImageFormat,
    getMutlipleImageFormat
}