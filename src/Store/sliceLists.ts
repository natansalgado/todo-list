import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import { idGenerator } from '../idGenerator'

interface Lists {
  title: string
  items: {
    id: string
    content: string
  }[]
}

interface State {
  lists: Lists[]
}

export const edit = {
  listIndex: 0,
  itemIndex: 0,
  value: ''
}

const localStorageState = localStorage.getItem('@lists')

const initialState: State =
  localStorageState
    ?
    JSON.parse(localStorageState)
    :
    {
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
    // LISTS HANDLERS -----------------------
    addNewItem: (state, { payload }) => {
      { state.lists[payload.index].items.push({ id: idGenerator(), content: payload.value }) }
      localStorage.setItem('@lists', JSON.stringify({ ...state, newItemModal: false }))
    },
    editItem: (state, { payload }) => {
      state.lists[edit.listIndex].items[edit.itemIndex].content = payload
      localStorage.setItem('@lists', JSON.stringify({ ...state, editModal: false }))
    },
    deleteItem: (state, { payload }) => {
      { state.lists[payload.listIndex].items.splice(payload.index, 1) }
      localStorage.setItem('@lists', JSON.stringify(state))
    },
    // DRAG AND DROP HANDLERS -------------
    moveCard: (state, { payload }) => {
      state.lists[payload.dragList].items.splice(payload.dragIndex, 1)
      state.lists[payload.hoverList].items.splice(payload.hoverIndex, 0, payload.item)
      localStorage.setItem('@lists', JSON.stringify(state))
    },
    moveToList: (state, { payload }) => {
      state.lists[payload.dragList].items.splice(payload.dragIndex, 1)
      state.lists[payload.hoverList].items.splice(state.lists[payload.hoverList].items.length, 0, payload.dragItem)
      localStorage.setItem('@lists', JSON.stringify(state))
    },
  }
})

export const { addNewItem, deleteItem, editItem, moveCard, moveToList } = slice.actions

export const state = ({ lists }: RootState) => lists

export default slice.reducer