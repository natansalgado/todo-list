import { Container } from './styles'

import { List } from '../List';

import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux'
import { moveCard, state } from '../../Store/sliceLists';

export const Board = () => {
  const { lists } = useSelector(state)
  const dispatch = useDispatch()

  const handleDropEnd = (e: any) => {
    if (e.destination) {
      const fromList = Number(e.source.droppableId)
      const toList = Number(e.destination.droppableId)
      const fromIndex = e.source.index
      const toIndex = e.destination.index

      dispatch(moveCard({ fromList, toList, fromIndex, toIndex }))
    }
  }

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