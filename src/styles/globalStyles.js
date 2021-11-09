import { createGlobalStyle } from "styled-components";

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
         /* display: flex;
        justify-content: center;
        align-items: center; */
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

`;
export default GlobalStyles;
