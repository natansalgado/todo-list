import { Container } from './styles'

import { useDispatch } from 'react-redux'
import { handleNewItemModal, handleConfigModal } from '../../Store/sliceLists'

import { BsGear } from 'react-icons/bs'

export const Footer = () => {
  const dispatch = useDispatch()

  const openNewItemModal = () => {
    dispatch(handleNewItemModal())
  }

  const openConfigModal = () => {
    dispatch(handleConfigModal())
  }

  return (
    <Container>
      <button onClick={openNewItemModal}>
        <p>new item</p>
      </button>
      <button onClick={openConfigModal}>
        <BsGear size={26} />
      </button>
    </Container >
  )
} 