import styled from 'styled-components'

import { colors } from '../../styles/global'

interface Props {
  isDragging: boolean
}

export const Container = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px ${colors.color + '40'} dashed;
  cursor: grab;
  
  

  p {
    opacity: ${({ isDragging }) => isDragging ? 0 : 1};
    width: 100%; 
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }

  svg {
    opacity: ${({ isDragging }) => isDragging ? 0 : 1};
  }
`

export const Buttons = styled.div<Props>`
  display: flex;
  gap: 10px;
  padding: 0 10px;

  button {
    opacity: ${({ isDragging }) => isDragging ? 0 : 1};
    height: 40px;
    width: 20px;
  }
`