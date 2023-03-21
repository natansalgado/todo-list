import styled from "styled-components";
import { colors } from "../../styles/global";

interface Props {
  isOver: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 80px);
  width: calc((100% / 3) - 20px);
  min-width: 270px;
  max-width: 500px;
  background: ${colors.glass};
  border-radius: 15px;
  
  filter: ${({ isOver }) => isOver ? 'brightness(1.1)' : 'none'};
  
  @media (max-width: 900px) {
    width: calc((100% / 2) - 10px);
  }
  
  @media (max-width: 640px) {
    width: 90%;
  }
  
  @media (max-width: 432px) {
    width: 380px;
  }
  
  header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-transform: uppercase;
    
    border-radius: 15px 15px 0 0;
    background: ${colors.background};
  }
  
  ul {
    height: 100%;
    overflow-y: auto;
    
    button {
      background: none;
      border-radius: 0;
    }
    
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #fff5;
    }
  }
  
  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${colors.background};
  }
`