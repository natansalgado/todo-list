import { Container } from './styles'

import { FaCheck, FaPencilAlt, FaRegClock } from 'react-icons/fa'

import { Item } from '../Item'

import { Droppable, DroppableProvided } from 'react-beautiful-dnd'

interface Props {
  listIndex: number
  data: {
    title: string
    items: {
      id: string,
      content: string
    }[]
  },
}

export const List = ({ data, listIndex }: Props) => {
  const handleIcon = () => {
    const Icons = [<FaRegClock size={20} />, <FaPencilAlt size={20} />, <FaCheck size={20} />]
    return Icons[listIndex]
  }

  return (
    <Container>
      <header>
        {handleIcon()}
        <h1>{data.title}</h1>
      </header>
      <Droppable droppableId={String(listIndex)}>
        {(provided: DroppableProvided) => (
          <>
            <ul ref={provided.innerRef} {...provided.droppableProps} >
              {
                data.items.map((item, index) =>
                  <Item key={index} listItem={item} listIndex={listIndex} index={index} />
                )
              }
              {provided.placeholder}
            </ul>
          </>
        )}
      </Droppable>
      <footer />
    </Container>
  )
}