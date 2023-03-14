import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: 'linear-gradient(220deg, #00c8ff 10%, #b300ff 90%) fixed',
  glass: 'rgba(0, 0, 0, 0.25)',
  color: '#fff'
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
    font: 14px 'Roboto', sans-serif;
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