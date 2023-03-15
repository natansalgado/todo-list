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
  background: ${colors.glass};
  padding: 30px 10px 20px;
  
  div{
    width: 100%;
  }
  
  input {
    padding: 0 20px;
    width: 100%;
    height: 40px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  background: ${colors.glass};
  padding: 10px 10px 30px;

  button {
    text-transform: uppercase;
    padding: 5px 10px;
    font-size: 18px;
  }
`

