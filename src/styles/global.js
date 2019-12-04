import { createGlobalStyle } from "styled-components";

import "react-circular-progressbar/dist/styles.css";

export default createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #67c159;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, body, #root {
    height: 100%;
}

h1 {
    font-size: 28pt;
    margin-bottom: 180px;
    color: #FFF;
    text-align: center;
}

p {
    cursor: pointer;
}

`;