import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 80px);
  width: calc((100% / 3) - 20px);
  min-width: 270px;
  max-width: 500px;
  background: ${colors.glass};
  border-radius: 15px;
  
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
    
  }
  
  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${colors.background};
  }
`