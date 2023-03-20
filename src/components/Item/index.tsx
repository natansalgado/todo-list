import { Container } from './styles'

import { Identifier, XYCoord } from 'dnd-core'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'

import { useDispatch } from 'react-redux'
import { deleteItem, moveCard } from '../../Store/sliceLists'

import { FaRegTrashAlt } from 'react-icons/fa'
import { VscGripper } from 'react-icons/vsc'
import { useRef } from 'react'

interface itemProps {
  index: number
  listIndex: number
  listItem: {
    id: string
    content: string
  }
}

export const Item = ({ index, listIndex, listItem }: itemProps) => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLLIElement>(null)

  const handleDeleteItem = (listIndex: number, index: number) => {
    dispatch(deleteItem({ listIndex, index }))
  }

  const [{ handlerId }, dropRef] = useDrop<itemProps, void, { handlerId: Identifier | any }>({
    accept: 'ITEM',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item: itemProps, monitor) {
      if (!ref.current) return

      const dragIndex = item.index
      const hoverIndex = index

      const dragList = item.listIndex
      const hoverList = listIndex

      if (dragIndex === hoverIndex && dragList === hoverList) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return


      dispatch(moveCard({ dragList, hoverList, dragIndex, hoverIndex, item: item.listItem }))

      item.index = hoverIndex
      item.listIndex = hoverList
    }
  })

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ITEM',
    item: { index, listItem, listIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  dragRef(dropRef(ref))
  return (
    <Container isDragging={isDragging} ref={ref} data-handler-id={handlerId}>
      <VscGripper color='white' size={40} />
      <p>
        {listItem.content}
      </p>
      <div className='mx-2'>
        <button onClick={() => handleDeleteItem(listIndex, index)}>
          <FaRegTrashAlt color='white' size={20} />
        </button>
      </div>
    </Container>
  )
}