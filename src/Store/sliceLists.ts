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

const initialState: State = {
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
    addNewItem: ({ lists }, { payload }) => {
      { lists[payload.index].items.push({ id: idGenerator(), content: payload.value }) }
    },
    editItem: ({ lists }, { payload }) => {
      lists[listIndexToEdit].items[itemIndexToEdit].content = payload
    },
    deleteItem: ({ lists }, { payload }) => {
      { lists[payload.listIndex].items.splice(payload.index, 1) }
    },

    // DRAG AND DROP HANDLERS -------------
    moveCard: ({ lists }, { payload }) => {
      lists[payload.dragList].items.splice(payload.dragIndex, 1)
      lists[payload.hoverList].items.splice(payload.hoverIndex, 0, payload.item)
    },
    moveToList: ({ lists }, { payload }) => {
      lists[payload.hoverList].items.push(payload.dragItem)
      lists[payload.dragList].items.splice(payload.dragIndex, 1)
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