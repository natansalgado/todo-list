import { Container } from './styles'

import { useDispatch } from 'react-redux'
import { newItemModal, configModal } from '../../Store/sliceModals'

import { BsGear } from 'react-icons/bs'

export const Footer = () => {
  const dispatch = useDispatch()

  const openNewItemModal = () => {
    dispatch(newItemModal())
  }

  const openConfigModal = () => {
    dispatch(configModal())
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