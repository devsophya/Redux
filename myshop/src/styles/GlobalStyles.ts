// CSS in TS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fce4ec;
    }

    body,button, input {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
