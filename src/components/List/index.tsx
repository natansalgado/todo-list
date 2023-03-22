import { Container } from './styles'

import { useDrop } from 'react-dnd'
import { Identifier } from 'dnd-core'

import { FaCheck, FaPencilAlt, FaRegClock } from 'react-icons/fa'

import { Item } from '../Item'

import { useDispatch } from 'react-redux'
import { moveToList } from '../../Store/sliceLists'

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

interface ItemProps {
  index: number
  listIndex: number
  listItem: {
    id: string
    content: string
  }
}

export const List = ({ data, listIndex }: Props) => {
  const dispatch = useDispatch()

  const handleIcon = () => {
    const Icons = [<FaRegClock size={20} />, <FaPencilAlt size={20} />, <FaCheck size={20} />]
    return Icons[listIndex]
  }

  const [{ isOver }, dropRef] = useDrop<ItemProps, void, { isOver: Identifier | any }>({
    accept: 'ITEM',
    drop(item) {
      const dragList = item.listIndex
      const hoverList = listIndex

      const dragIndex = item.index
      const dragItem = item.listItem

      dispatch(moveToList({ dragList, hoverList, dragIndex, dragItem }))

      item.listIndex = listIndex
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    })
  })

  return (
    <Container isOver={isOver}>
      <header>
        {handleIcon()}
        <h1>{data.title}</h1>
      </header>
      <ul ref={dropRef}>
        {
          data.items.map((item, index) =>
            <Item key={item.id} listItem={item} listIndex={listIndex} index={index} />
          )
        }
      </ul>
      <footer />
    </Container>
  )
}