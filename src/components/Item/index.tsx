import { Container } from './styles'

import { useDispatch } from 'react-redux'
import { deleteItem } from '../../Store/sliceLists'

import { FaRegTrashAlt } from 'react-icons/fa'
import { VscGripper } from 'react-icons/vsc'

interface itemProps {
  index: number,
  listIndex: number,
  item: {
    id: string,
    content: string
  }
}

export const Item = ({ index, listIndex, item }: itemProps) => {
  const dispatch = useDispatch()

  const handleDeleteItem = (listIndex: number, index: number) => {
    dispatch(deleteItem({ listIndex, index }))
  }

  return (
    <Container>
      <VscGripper color='white' size={40} />
      <p>
        {item.content}
      </p>
      <div className='mx-2'>
        <button onClick={() => handleDeleteItem(listIndex, index)}>
          <FaRegTrashAlt color='white' size={20} />
        </button>
      </div>
    </Container>
  )
}