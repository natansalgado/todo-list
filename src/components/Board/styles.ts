import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  height: 100%;
  width: 100%;
  padding: 10px 20px;
  overflow-y: auto;

  @media (max-width: 640px) {
    padding: 10px 5px
  }

  &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #0007;
    }
`