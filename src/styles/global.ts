import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    background: ${(props) => props.theme.body};
  }
  
`;