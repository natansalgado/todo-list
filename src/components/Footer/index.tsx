import { Container } from './styles'

interface footerProps {
  openNewItemScreen: () => void
}

export const Footer = ({ openNewItemScreen }: footerProps) => {
  return (
    <Container>
      <button onClick={openNewItemScreen}>
        <p>new item</p>
      </button>
    </Container >
  )
} 