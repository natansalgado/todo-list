import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { handleNewItemModal, addNewItem } from '../../Store/sliceLists'

import { Container, Box, Body, Buttons } from './styles'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'

export const NewItemModal = () => {
  const buttons = ['todo', 'doing', 'done']
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const closeNewItemModal = () => {
    dispatch(handleNewItemModal())
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

  return (
    <Container>
      <Box>
        <header>
          <button onClick={closeNewItemModal}>
            <FaArrowLeft color='white' size={20} />
          </button>
          <h1>add a new item</h1>
          <FaPlus color='white' size={20} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <input type="text" value={value} onChange={handleNewItem} />
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