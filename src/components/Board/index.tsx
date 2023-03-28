import { Container } from './styles'

import { List } from '../List';

import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux'
import { moveCard, state } from '../../Store/sliceLists';
import { useEffect } from 'react';

export const Board = () => {
  const { lists } = useSelector(state)

  const dispatch = useDispatch()

  const handleDropEnd = (result: any) => {
    const { destination, source } = result

    if (destination) {
      dispatch(moveCard({
        fromList: Number(source.droppableId),
        toList: Number(destination.droppableId),
        fromIndex: source.index,
        toIndex: destination.index
      }))
    }
  }

  useEffect(() => {
    if (lists[0].items.length > 0) {
      document.title = `(${lists[0].items.length}) To do list`;
    } else {
      document.title = `To do list`;
    }
  })

  return (
    <Container>
      <DragDropContext onDragEnd={handleDropEnd}>
        {
          lists.map((data, index) =>
            <List key={index} data={data} listIndex={index} />
          )
        }
      </DragDropContext>
    </Container>
  )
}