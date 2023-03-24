import { createSlice } from '@reduxjs/toolkit'
import { edit } from './sliceLists'
import { RootState } from '.'

interface State {
  newItemModal: boolean
  editModal: boolean
  configModal: boolean
}

const initialState: State = {
  newItemModal: false,
  editModal: false,
  configModal: false
}

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    newItemModal: (state) => {
      return { ...state, newItemModal: !state.newItemModal }
    },
    editModal: (state, { payload }) => {
      edit.listIndex = payload.listIndex
      edit.itemIndex = payload.index
      edit.value = payload.value
      return {
        ...state,
        editModal: !state.editModal
      }
    },
    configModal: (state) => {
      return { ...state, configModal: !state.configModal }
    }
  }
})

export const { newItemModal, editModal, configModal } = slice.actions

export const modals = ({ modals }: RootState) => modals

export default slice.reducer