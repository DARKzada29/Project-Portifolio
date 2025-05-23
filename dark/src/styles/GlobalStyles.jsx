import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #0a192f;
    --secondary: #64ffda;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
    --background: #0a192f;
    --background-light: #112240;
    --white: #e6f1ff;
    --black: #020c1b;
    --gray: #8892b0;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.3;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--secondary);
    transition: var(--transition);
  }

  a:hover {
    color: var(--secondary);
    filter: brightness(1.2);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: var(--font-sans);
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    @media (max-width: 1080px) {
      padding: 0 40px;
    }
    
    @media (max-width: 768px) {
      padding: 0 25px;
    }
  }

  .section-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;
    color: var(--white);
    
    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--text-secondary);

      @media (max-width: 768px) {
        width: 200px;
      }
      
      @media (max-width: 480px) {
        width: 100px;
      }
    }
  }
`;

export default GlobalStyles;
