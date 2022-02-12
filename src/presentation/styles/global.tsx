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

  html {
    background: linear-gradient(180deg, #000000 48.91%, #891a10 100%);
    background-attachment: fixed;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

`

export default GlobalStyle
