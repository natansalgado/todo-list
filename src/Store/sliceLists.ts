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
  newItemModal: boolean
  editModal: boolean
  lists: Lists[]
}

let listIndexToEdit = 0
let itemIndexToEdit = 0
export let valueToEdit = ''

const localStorageState = localStorage.getItem('@lists')

const initialState: State =
  localStorageState
    ?
    JSON.parse(localStorageState)
    :
    {
      newItemModal: false,
      editModal: false,
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
      state.lists[listIndexToEdit].items[itemIndexToEdit].content = payload
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

    // MODALS HANDLERS -------------
    handleNewItemModal: (state) => {
      return { ...state, newItemModal: !state.newItemModal }
    },
    handleEditModal: (state, { payload }) => {
      listIndexToEdit = payload.listIndex
      itemIndexToEdit = payload.index
      valueToEdit = payload.value
      return {
        ...state,
        editModal: !state.editModal
      }
    },
  }
})

export const {
  addNewItem, deleteItem,
  handleNewItemModal,
  handleEditModal, editItem,
  moveCard, moveToList
} = slice.actions

export const state = ({ lists }: RootState) => lists

export default slice.reducer