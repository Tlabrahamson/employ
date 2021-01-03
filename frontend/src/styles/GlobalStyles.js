import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
}

body {
    background: #fefefe;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
}

h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 70px;
}

h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 56px;
}

main {
    padding: 2rem 8rem;
    width: 1200px;
    margin: 0 auto;
    display: block;
    min-height: 80vh;
    overflow: hidden;
}

button {
    cursor: pointer;
    transition: all 0.3s ease;
    background: #EE4853;
    &:hover {
        opacity: 0.7;
      }
}

a {
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.7;
      }
}

p {
    white-space: pre-line;
    font-size: 1rem;
    line-height: 30px;
}

hr {
    color: #2d2d2d;
}

.progress {
    position: absolute;
    top: 50%;
    left: 47%;
    color: #2d2d2d !important;
}

@media screen and (max-width: 1200px) {
    main {
        width: 100%;
        padding: 2rem 2rem;
        min-height: 100%;
    }
}

@media screen and (max-width: 800px) {
    h1 {
        font-size: 32px;
        line-height: 56px;
    }

    h2 {
        font-size: 24px;
        line-height: 36px
    }
}
`;

export default GlobalStyles;
