import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=Notable');
  
  * {
    font-family: 'Notable', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`

export default GlobalStyle;