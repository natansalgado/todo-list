import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 5px;
  text-align: center;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    text-transform: uppercase;
    background: ${colors.background};
    border-radius: 15px 15px 0 0;
    padding: 20px;

    button {
      display: flex;
      background: none;
      border: none;
    }
  }

  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${colors.background};
  }
`

export const Box = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius: 15px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  background: ${colors.glass};
  padding: 30px 10px 20px;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  
  background: ${colors.background};
  border-radius: 12px;
  padding: 5px 15px;

  hr {
    width: 100%;
    opacity: 40%;
    margin-top: -5px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    width: 100%;

    div {
      justify-content: start;
    }
    
    input[type="range"] {
      -webkit-appearance: none;
      height: 30px;
      width: 100%;
      max-width: 145px;
      border-radius: 20px;
      background: ${colors.glass};

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: ${colors.background};
        border: 2px solid ${colors.glass};
        cursor: ew-resize;

      }

      &::-webkit-slider-thumb:hover {
        filter: brightness(1.1);
      }
    } 
  }
  

  p {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
  }

  input[type='color'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    max-width: 145px;
    border-radius: 0;
    height: 40px;
    width: 100%;
    cursor: pointer;
    filter: none;

    &::-webkit-color-swatch {
    border-radius: 20px;
    border: none;
    }

  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  text-align: center;
  background: ${colors.glass};
  padding: 10px 0 30px;

  button {
    text-transform: uppercase;
    padding: 8px 20px;
    font-size: 18px;
  }
`