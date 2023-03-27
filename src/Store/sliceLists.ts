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
      localStorage.setItem('@lists', JSON.stringify({ ...state }))
    },
    editItem: (state, { payload }) => {
      state.lists[edit.listIndex].items[edit.itemIndex].content = payload
      localStorage.setItem('@lists', JSON.stringify({ ...state }))
    },
    deleteItem: (state, { payload }) => {
      { state.lists[payload.listIndex].items.splice(payload.index, 1) }
      localStorage.setItem('@lists', JSON.stringify(state))
    },
    // DRAG AND DROP HANDLERS -------------
    moveCard: (state, { payload }) => {
      var stateCopy = state
      var item = state.lists[payload.fromList].items[payload.fromIndex]

      stateCopy.lists[payload.fromList].items.splice(payload.fromIndex, 1)
      stateCopy.lists[payload.toList].items.splice(payload.toIndex, 0, item)

      state = stateCopy
      localStorage.setItem('@lists', JSON.stringify(state))
    },
  }
})

export const { addNewItem, deleteItem, editItem, moveCard } = slice.actions

export const state = ({ lists }: RootState) => lists

export default slice.reducer