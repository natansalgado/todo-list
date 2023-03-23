import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface State {
  background1: string
  background2: string
  glassColor: string
  opacity: string
  color: string
}

const localStorageConfig = localStorage.getItem('@config')

export const initialState: State =
  localStorageConfig
    ?
    JSON.parse(localStorageConfig)
    :
    {
      background1: '#00c8ff',
      background2: '#b300ff',
      glassColor: '#000000',
      opacity: '40',
      color: '#ffffff'
    }

const slice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    save: (state, { payload }) => {
      state.background1 = payload.background1
      state.background2 = payload.background2
      state.glassColor = payload.glassColor
      state.opacity = payload.opacity
      state.color = payload.color

      localStorage.setItem('@config', JSON.stringify(state))
    }

  }
})

export const { save } = slice.actions

export const config = ({ config }: RootState) => config

export default slice.reducer