import { Container } from './styles'

import { FaRegTrashAlt } from 'react-icons/fa'
import { VscGripper } from 'react-icons/vsc'

interface itemProps {
  title: string,
  item: {
    id: string,
    content: string
  }
  deleteItem: (id: string, title: string) => void
}

export const Item = ({ item, title, deleteItem }: itemProps) => {
  return (
    <Container>
      <VscGripper color='white' size={40} />
      <p>
        {item.content}
      </p>
      <div className='mx-2'>
        <button onClick={() => deleteItem(item.id, title)}>
          <FaRegTrashAlt color='white' size={20} />
        </button>
      </div>
    </Container>
  )
}