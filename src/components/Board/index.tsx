import { Container } from './styles'

import { List } from '../List';

import { useSelector } from 'react-redux'
import { state } from '../../Store/sliceLists';


export const Board = () => {
  const { lists } = useSelector(state)

  return (
    <Container>
      {
        lists.map((data, index) =>
          <List key={index} data={data} listIndex={index} />
        )
      }
    </Container>
  )
}