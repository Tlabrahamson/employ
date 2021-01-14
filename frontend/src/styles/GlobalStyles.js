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
    background: #f44336;
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

select {
    font-size: 1rem;
    padding: 0.3rem 0;
}

.progress {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg {
            color: #5aa8e0;
        }
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    list-style: none;
    
    a {
        box-shadow: 2px 2px 2px #dfdfdf;
        text-decoration: none;
        color: inherit;
        border: solid 1px #eee;
        padding: .5rem 1rem;
        border-radius: 8px;
        margin: 0 .75rem;

        &:hover {
            transform: scale(1.05);
            box-shadow: 2px 2px 4px #dfdfdf;
        }
    }
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

    .pagination {
        justify-content: space-between;
        
        a {
            margin: 0;
        }
    }
}
`;

export default GlobalStyles;
