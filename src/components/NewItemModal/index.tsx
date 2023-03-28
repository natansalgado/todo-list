import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addNewItem } from '../../Store/sliceLists'
import { newItemModal } from '../../Store/sliceModals'

import { Container, Box, Body, Buttons } from './styles'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'

export const NewItemModal = () => {
  const buttons = ['todo', 'doing', 'done']
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const closeNewItemModal = () => {
    dispatch(newItemModal())
  }

  const handleNewItem = (e: any) => {
    setValue(e.target.value)
  }

  const addNewItemFunction = (index: number) => {
    if (value) {
      dispatch(addNewItem({ value, index }))
      closeNewItemModal()
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      addNewItemFunction(0)
    }
  }

  return (
    <Container>
      <Box>
        <header>
          <button onClick={closeNewItemModal}>
            <FaArrowLeft size={20} />
          </button>
          <h1>add a new item</h1>
          <FaPlus size={20} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <input onKeyDown={handleKeyDown} autoFocus type="text" value={value} onChange={handleNewItem} />
        </Body>
        <Buttons>
          {
            buttons.map((button, index) =>
              <button key={index} onClick={() => addNewItemFunction(index)}>
                {button}
              </button>
            )
          }
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}