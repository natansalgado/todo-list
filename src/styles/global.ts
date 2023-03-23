import { createGlobalStyle } from 'styled-components'
import { initialState } from '../Store/sliceConfig'

const { background1, background2, glassColor, color, opacity } = initialState

export const colors = {
  background: `linear-gradient(220deg, ${background1} 10%, ${background2} 90%) fixed`,
  glass: 'rgba(' + parseInt(glassColor.slice(-6, -4), 16) + ',' + parseInt(glassColor.slice(-4, -2), 16) + ',' + parseInt(glassColor.slice(-2), 16) + ',' + opacity + '%' + ')',
  color: color
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    background: ${colors.background};
  }

  body, button, p, input {
    font-family: 'roboto', sans-serif;
    font-size: 14px;
    color: ${colors.color};
    -webkit-font-smoothing: antialised !important;
  }

  .App {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button, input {
    border-radius: 0.75rem;
    border: none;
    outline: none;
    background: ${colors.background};
    filter: brightness(1.05);
  }

  header, footer {
    filter: brightness(1.2);
  }

  button {
    cursor: pointer;
  }

  button:hover {
      filter: brightness(1.5);
    }

  ul {
    list-style: none;
  }
`