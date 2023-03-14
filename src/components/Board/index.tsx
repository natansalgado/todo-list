import { Container } from './styles'

import { useState } from 'react'
import { List } from '../List';

import { loadLists } from '../../services/api'

export const Board = () => {
  const [listsState, setListsState] = useState(loadLists())

  return (
    <Container>
      {
        listsState.map((data) =>
          <List key={data.title} data={data} />
        )
      }
    </Container>
  )
}