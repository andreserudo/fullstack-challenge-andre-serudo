import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;    
  }

  html, body {
    display: flex;    
    //min-height: 100vh;
    width: 100%;
  }

  #root {    
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;    
  }
`;

export default GlobalStyle;
