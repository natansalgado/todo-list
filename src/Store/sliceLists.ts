import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import { idGenerator } from '../idGenerator'

interface Items {
  id: string
  content: string
}

interface Lists {
  title: string,
  items: Items[]
}

interface State {
  newItemModal: boolean
  lists: Lists[]
}

const initialState: State = {
  newItemModal: false,
  lists: [
    { title: 'todo', items: [] },
    { title: 'doing', items: [] },
    { title: 'done', items: [] }
  ]
}

const slice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addNewItem: ({ lists }, { payload }) => {
      { lists[payload.index].items.push({ id: idGenerator(), content: payload.value }) }
    },
    deleteItem: ({ lists }, { payload }) => {
      { lists[payload.listIndex].items.splice(payload.index, 1) }
    },
    handleNewItemModal: (state) => {
      return { ...state, newItemModal: !state.newItemModal }
    },
    moveCard: ({ lists }, { payload }) => {
      lists[payload.dragList].items.splice(payload.dragIndex, 1)
      lists[payload.hoverList].items.splice(payload.hoverIndex, 0, payload.item)
    },
    moveToList: ({ lists }, { payload }) => {
      lists[payload.hoverList].items.push(payload.dragItem)
      lists[payload.dragList].items.splice(payload.dragIndex, 1)
    }
  }
})

export const { addNewItem, deleteItem, handleNewItemModal, moveCard, moveToList } = slice.actions

export const state = ({ lists }: RootState) => lists


export default slice.reducer