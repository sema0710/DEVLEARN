import { createGlobalStyle } from 'styled-components';
import { color, pxToRem } from '.';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    html, input {
        font-weight: 100;
    }
    .ce-block__content {
        color: white;
        max-width: 93%;
    }
    .ce-toolbar__content {
        max-width: 93%;
        padding: 0px 10px;
        box-sizing: border-box;
        > div {
            color: white;
        }
    }
    .ce-block--selected .ce-block__content {
        background-color: ${color.main};
    }
    .ce-toolbar .ce-toolbox > li, .ce-toolbar__plus {
        color: white;
    }
    .cdx-quote [contentEditable=true][data-placeholder]::before {
        color: white !important;
    }
    .ce-paragraph[data-placeholder]:empty::before {
        color: white !important;
        font-weight: 100 !important;
    }
    .cdx-block, .cdx-list__item {
        font-size: ${pxToRem(20)}rem !important;
    }
    .ce-code__textarea {
        font-size: ${pxToRem(15)}rem !important;
    }
    .codex-editor__redactor {
        padding-bottom: 0px !important;
    }
`;

export default GlobalStyle;
