import { createGlobalStyle } from 'styled-components'
import theme from './theme'
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito', 'sans-serif';
    background-color: ${theme.colors.dark};
    a:hover, a:active {
      color:  ${theme.colors.secondary};
    }
  }
  .hide-on-mobile {
      display: block;
    }
  .visible-on-mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .hide-on-mobile {
      display: none;
    }
    .visible-on-mobile {
      display: block;
    }
  }
`

export default GlobalStyles
