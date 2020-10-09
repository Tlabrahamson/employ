import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #2e343b;
    font-family: 'Roboto', sans-serif;
    position: relative;
    min-height: 100vh;
}

main {
    padding: 0 8rem;
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 8rem;
    display: block;
}

button {
    cursor: pointer;
    transition: all 0.4s ease;
    
    &:hover {
        opacity: 0.7;
      }
}

a {
    transition: all 0.4s ease;
    
    &:hover {
        opacity: 0.7;
      }
}

p {
    white-space: pre-line;
}

@media screen and (max-width: 1200px) {
    main {
        width: 100%;
        padding: 0 2rem;
    }
}
`;

export default GlobalStyles;
