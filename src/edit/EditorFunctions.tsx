// 감싸는 마크다운 문법
function editWrap(cursorPositionStart: number, content: string, target: string): string {
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
        newContent = content + target + " " + target;
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

    return newContent;
}

// 감싸지 않는 마크다운 문법
function editSingle(cursorPositionStart: number, content: string, target: string): string {
    return [
        content.slice(0, cursorPositionStart),
        target, 
        content.slice(cursorPositionStart, content.length)
    ].join('');
}

function getBoldText(position: number, content: string): string {
    return editWrap(position, content, '**');
}

function getStrengthText(position: number, content: string): string {
    return editWrap(position, content, '~~');
}

function getItalicText(position: number, content: string): string {
    return editWrap(position, content, '*')
}

function getCodeBlock(positon: number, content: string): string {
    return editWrap(positon, content, '\`\`\`');
}

function getHeading(positon: number, content: string): string {
    return editSingle(positon, content, '#');
}

export {
    getBoldText,
    getStrengthText,
    getItalicText,
    getCodeBlock,
    getHeading
}