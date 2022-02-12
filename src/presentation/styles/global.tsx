import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, .App, #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  body {
    background: linear-gradient(180deg, #000000 48.91%, #891a10 100%);
    background-attachment: fixed;
  }
`

export default GlobalStyle
