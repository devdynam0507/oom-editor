// 감싸는 마크다운 문법
function editWrap(cursorPositionStart, content, target) {
    var stringBlockIndex = 0;
    // 현재 커서 포지션에서 에서 마지막 문자열 위치를 찾는다.
    for (var i = cursorPositionStart; i < content.length; i++) {
        stringBlockIndex = i + 1;
        if (content.charAt(i) === ' ' || content.charAt(i) === "\n") {
            break;
        }
    }
    var otherBlockIndex = stringBlockIndex == content.length - 1 ? 0 : content.length;
    var newContent = content;
    if (content.length == cursorPositionStart) {
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
function editSingle(cursorPositionStart, content, target) {
    return {
        newContent: [
            content.length > 0 ? "\n" : "",
            content.slice(0, cursorPositionStart),
            target + " ",
            content.slice(cursorPositionStart, content.length),
        ].join(''),
        startFocusPosition: cursorPositionStart + target.length + 2
    };
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
function editFormat(content, target, targetFormat, targetFormatContent) {
    var formatted = target.replace(targetFormat, targetFormatContent);
    var newContent = [content, "\n", formatted].join('');
    console.log(formatted);
    return {
        newContent: newContent,
        startFocusPosition: newContent.length
    };
}
function getBoldText(position, content) {
    return editWrap(position, content, '**');
}
function getStrengthText(position, content) {
    return editWrap(position, content, '~~');
}
function getItalicText(position, content) {
    return editWrap(position, content, '*');
}
function getCodeBlock(positon, content) {
    return editWrap(positon, content, '\`\`\`');
}
function getHeading(positon, content) {
    return editSingle(positon, content, '#');
}
function getQuote(position, content) {
    return editSingle(position, content, '>');
}
function getImageFormat(content, imageUrl) {
    return editFormat(content, '![](%url%)', '%url%', imageUrl);
}
function getMutlipleImageFormat(content, imageUrls) {
    var editResult = null;
    for (var i = 0; i < imageUrls.length; i++) {
        if (editResult === null) {
            editResult = getImageFormat(content, imageUrls[i]);
        }
        else {
            editResult = getImageFormat(editResult.newContent, imageUrls[i]);
        }
    }
    return editResult;
}
export { getBoldText, getStrengthText, getItalicText, getCodeBlock, getHeading, getQuote, getImageFormat, getMutlipleImageFormat, };
