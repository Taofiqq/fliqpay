import { createGlobalStyle } from "styled-components";

// global styles to be applied for the whole app.
const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;  
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
        list-style:  none;
        text-decoration: none;
     
    }

    body {
        margin:0;
        padding:0;
        height: 100vh;
    }

`;
export default GlobalStyles;
