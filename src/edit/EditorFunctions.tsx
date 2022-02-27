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
    console.log(content.length);
    return {
        newContent: [
            content.length > 0 ? "\n" : "",
            content.slice(0, cursorPositionStart),
            target + " ", 
            content.slice(cursorPositionStart, content.length),
            "\n"
        ].join(''),
        startFocusPosition: cursorPositionStart + target.length + 2
    }
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

export {
    getBoldText,
    getStrengthText,
    getItalicText,
    getCodeBlock,
    getHeading
}