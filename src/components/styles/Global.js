import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    html {
        font-size: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.body};
        color: ${({ theme }) => theme.colors.body};
        background-color: ${({ theme }) => theme.bgColors.body};
        font-weight: 300;
    }

    a, a:visited, a:active {
        text-decoration: none;
    }
`

export default GlobalStyles