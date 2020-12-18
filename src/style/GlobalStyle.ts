import { createGlobalStyle } from 'styled-components';
import { color } from '.';

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
        max-width: 90%;
    }
    .ce-toolbar__content {
        max-width: 90%;
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
`;

export default GlobalStyle;
