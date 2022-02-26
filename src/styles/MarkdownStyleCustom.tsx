import React from "react";
import styled from "styled-components";

const BlockQuoteStyle = styled.blockquote`
    color: #666;
    margin: 5px;
    padding-left: 3em;
    border-left: 0.5em #eea solid;
`

function BlockQuoteCustom(node: any) {
    console.log(node);
    return (<BlockQuoteStyle>{node.children}</BlockQuoteStyle>)
}

export {
    BlockQuoteCustom
}