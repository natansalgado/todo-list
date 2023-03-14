import { useState } from 'react'

import { Container, Box, Body, Buttons } from './styles'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'

interface NewItemProps {
  close: () => void,
  addNewItem: (value: string, title: string) => void
}

export const NewItemScreen = ({ close, addNewItem }: NewItemProps) => {
  const [newItem, setNewItem] = useState('')

  const handleNewItem = (e: any) => {
    setNewItem(e.target.value)
  }

  const handleAddNewItem = (title: string) => {
    newItem && addNewItem(newItem, title)
  }

  return (
    <Container>
      <Box>
        <header>
          <button onClick={close}>
            <FaArrowLeft color='white' size={20} />
          </button>
          <h1>add a new item</h1>
          <FaPlus color='white' size={20} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <input type="text" value={newItem} onChange={handleNewItem} />
        </Body>
        <Buttons>
          <button onClick={() => handleAddNewItem('todo')}>
            todo
          </button>
          <button onClick={() => handleAddNewItem('doing')}>
            doing
          </button>
          <button onClick={() => handleAddNewItem('done')}>
            done
          </button>
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}