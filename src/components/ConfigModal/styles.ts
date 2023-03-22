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
  background: ${colors.background};
  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 12px;
  padding: 5px 15px;

  p {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
  }

  input {
    border-radius: 0;
    height: 40px;
    width: 40px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`

export const Buttons = styled.div`
  text-align: center;
  background: ${colors.glass};
  padding: 10px 0 30px;

  button {
    text-transform: uppercase;
    padding: 8px 20px;
    font-size: 18px;
  }
`