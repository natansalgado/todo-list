import { Container } from './styles'
import { useState, useEffect } from 'react'
import produce from 'immer';

import { List } from '../List';
import { NewItemScreen } from '../NewItemScreen';

import { loadLists } from '../../services/api'
import { idGenerator } from '../../idGenerator';

interface IProps {
  newItemScreen: boolean,
  handleNewItemScreen: () => void
}

interface Ilists {
  title: string,
  items: {
    id: string,
    content: string
  }[]
}

export const Board = ({ newItemScreen, handleNewItemScreen }: IProps) => {
  const [listsState, setListsState] = useState<Ilists[]>(loadLists())
  const title = listsState[0].items.length

  const addNewItem = (value: string, index: number) => {
    setListsState(produce(listsState, draft => {
      draft[index].items.push({ id: idGenerator(), content: value })
    }))
  }

  const deleteItem = (index: number, listIndex: number) => {
    setListsState(produce(listsState, draft => {
      draft[listIndex].items.splice(index, 1)
    }))
    if (title === 1) document.title = 'To do list'
  }

  useEffect(() => {
    if (title > 0) document.title = `[${title}] To do list`
  }, [listsState])

  return (
    <Container>
      {
        newItemScreen ?
          <NewItemScreen close={handleNewItemScreen} newItem={addNewItem} />
          :
          listsState.map((data, index) =>
            <List key={index} data={data} listIndex={index} deleteItemBoard={deleteItem} />
          )
      }
    </Container>
  )
}