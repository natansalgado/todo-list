import { useState } from 'react'
import { Container, Box, Body, Buttons } from './styles'
import { FaArrowLeft, FaRegEdit } from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { editItem, handleEditModal, valueToEdit } from '../../Store/sliceLists'

export const EditModal = () => {
  const [value, setValue] = useState(valueToEdit)
  const dispatch = useDispatch()

  const handleItemValue = (e: any) => {
    setValue(e.target.value)
  }

  const closeEditModal = () => {
    dispatch(handleEditModal(value))
  }

  const handleEditItem = () => {
    if (value) {
      dispatch(editItem(value))
      closeEditModal()
    }
  }

  return (
    <Container>
      <Box>
        <header>
          <button onClick={closeEditModal}>
            <FaArrowLeft color='white' size={20} />
          </button>
          <h1>edit item</h1>
          <FaRegEdit color='white' size={24} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <input type="text" value={value} onChange={handleItemValue} />
        </Body>
        <Buttons>
          <button onClick={handleEditItem}>
            Save
          </button>
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}