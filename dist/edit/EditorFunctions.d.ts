interface EditResult {
    newContent: string;
    startFocusPosition: number;
}
declare function getBoldText(position: number, content: string): EditResult;
declare function getStrengthText(position: number, content: string): EditResult;
declare function getItalicText(position: number, content: string): EditResult;
declare function getCodeBlock(positon: number, content: string): EditResult;
declare function getHeading(positon: number, content: string): EditResult;
declare function getQuote(position: number, content: string): EditResult;
declare function getImageFormat(content: string, imageUrl: string): EditResult;
declare function getMutlipleImageFormat(content: string, imageUrls: string[]): EditResult;
export { getBoldText, getStrengthText, getItalicText, getCodeBlock, getHeading, getQuote, getImageFormat, getMutlipleImageFormat, };
export type { EditResult };
