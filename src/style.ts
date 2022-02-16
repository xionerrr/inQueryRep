import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #fff;
        color: #212429;
        width: 100vw;
        overflow-x: hidden;
    }
`