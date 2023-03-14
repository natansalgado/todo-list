import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Container = styled.div`
  height: 60px;
  text-align: center;
  background: ${colors.glass};
  padding: 4px 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  
  button {
    width: 100%;
    max-width: 380px;
    padding: 10px 0;
    background: ${colors.background};
    border: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  p {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  }
`