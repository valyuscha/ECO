import {createGlobalStyle} from 'styled-components'
import {colors} from './assets/colors'

export default createGlobalStyle`
  body,
  html {
    overflow-x: hidden;
  }
  
  * {
    font-family: 'Gilroy', sans-serif;
    padding: 0;
    margin: 0;
    outline: none;
    color: ${colors.black};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`
