import { useState } from 'react'

import { Container, Box, Body, Buttons } from './styles'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'

interface NewItemProps {
  close: () => void,
  newItem: (value: string, index: number) => void
}

export const NewItemScreen = ({ close, newItem }: NewItemProps) => {
  const [value, setValue] = useState('')

  const handleNewItem = (e: any) => {
    setValue(e.target.value)
  }

  const addNewItemFunction = (index: number) => {
    if (value) {
      newItem(value, index)
      close()
    }
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
          <input type="text" value={value} onChange={handleNewItem} />
        </Body>
        <Buttons>
          <button onClick={() => addNewItemFunction(0)}>
            todo
          </button>
          <button onClick={() => addNewItemFunction(1)}>
            doing
          </button>
          <button onClick={() => addNewItemFunction(2)}>
            done
          </button>
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}