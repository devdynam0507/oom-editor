var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
var BlockQuoteStyle = styled.blockquote(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: #666;\n    margin: 5px;\n    padding-left: 3em;\n    border-left: 0.5em #eea solid;\n"], ["\n    color: #666;\n    margin: 5px;\n    padding-left: 3em;\n    border-left: 0.5em #eea solid;\n"])));
function BlockQuoteCustom(node) {
    console.log(node);
    return (_jsx(BlockQuoteStyle, { children: node.children }, void 0));
}
export { BlockQuoteCustom };
var templateObject_1;
