import { Container } from './styles'

import { FaCheck, FaPencilAlt, FaRegClock } from 'react-icons/fa'

import { Item } from '../Item'

interface Props {
  listIndex: number
  data: {
    title: string,
    items: {
      id: string,
      content: string
    }[]
  },
}

export const List = ({ data, listIndex }: Props) => {

  const handleIcon = (listIndex: number) => {
    const Icons = [<FaRegClock size={20} />, <FaPencilAlt size={20} />, <FaCheck size={20} />]
    return Icons[listIndex]
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
            <Item key={item.id} item={item} listIndex={listIndex} index={index} />
          )
        }
      </ul>
      <footer />
    </Container>
  )
}