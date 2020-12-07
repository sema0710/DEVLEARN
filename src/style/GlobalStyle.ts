import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    html, input {
        font-weight: 100;
    }
`;

export default GlobalStyle;
