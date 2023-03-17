import { configureStore } from "@reduxjs/toolkit";
import listsReducer from './sliceLists'

const store = configureStore({
  reducer: {
    lists: listsReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch