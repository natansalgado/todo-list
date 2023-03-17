import { Container } from './styles'

import { useDispatch } from 'react-redux'
import { handleNewItemModal } from '../../Store/sliceLists'

export const Footer = () => {
  const dispatch = useDispatch()

  const openNewItemModal = () => {
    dispatch(handleNewItemModal())
  }

  return (
    <Container>
      <button onClick={openNewItemModal}>
        <p>new item</p>
      </button>
    </Container >
  )
} 