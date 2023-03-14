import { Container } from './styles'

import { useState } from 'react'
import { FaCheck, FaPencilAlt, FaRegClock } from 'react-icons/fa'

import { Item } from '../Item'

interface listProps {
  data: {
    title: string,
    items: {
      id: string,
      content: string
    }[]
  }
}

export const List = ({ data }: listProps) => {

  const handleIcon = (title: string) => {
    switch (title) {
      case 'todo':
        return <FaRegClock size={20} />
      case 'doing':
        return <FaPencilAlt size={20} />
      case 'done':
        return <FaCheck size={20} />
    }
  }

  const deleteItem = (id: string, title: string) => {

  }

  return (
    <Container>
      <header>
        {handleIcon(data.title)}
        <h1>{data.title}</h1>
      </header>
      <ul>
        {
          data.items.length > 0 &&
          data.items.map((item) =>
            <Item key={item.id} item={item} title={data.title} deleteItem={deleteItem} />
          )
        }
      </ul>
      <footer />
    </Container>
  )
}