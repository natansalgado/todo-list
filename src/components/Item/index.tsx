import { Container } from './styles'

import { FaRegTrashAlt } from 'react-icons/fa'
import { VscGripper } from 'react-icons/vsc'

interface itemProps {
  index: number,
  listIndex: number,
  item: {
    id: string,
    content: string
  }
  deleteItem: (index: number, listIndex: number) => void
}

export const Item = ({ index, listIndex, item, deleteItem }: itemProps) => {
  return (
    <Container>
      <VscGripper color='white' size={40} />
      <p>
        {item.content}
      </p>
      <div className='mx-2'>
        <button onClick={() => deleteItem(index, listIndex)}>
          <FaRegTrashAlt color='white' size={20} />
        </button>
      </div>
    </Container>
  )
}