import { Container } from './styles'

import { useEffect, useState } from 'react'
import { FaCheck, FaPencilAlt, FaRegClock } from 'react-icons/fa'

import { Item } from '../Item'

interface listProps {
  listIndex: number
  data: {
    title: string,
    items: {
      id: string,
      content: string
    }[]
  },
  deleteItemBoard: (index: number, listIndex: number) => void
}

export const List = ({ data, listIndex, deleteItemBoard }: listProps) => {


  const handleIcon = (listIndex: number) => {
    const Icons = [<FaRegClock size={20} />, <FaPencilAlt size={20} />, <FaCheck size={20} />]
    return Icons[listIndex]
  }

  const deleteItemFunction = (index: number, listIndex: number) => {
    deleteItemBoard(index, listIndex)
  }

  return (
    <Container>
      <header>
        {handleIcon(listIndex)}
        <h1>{data.title}</h1>
      </header>
      <ul>
        {
          data.items.map((item, index) =>
            <Item key={item.id} item={item} listIndex={listIndex} index={index} deleteItem={deleteItemFunction} />
          )
        }
      </ul>
      <footer />
    </Container>
  )
}