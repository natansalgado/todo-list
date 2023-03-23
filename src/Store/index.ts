import { configureStore } from "@reduxjs/toolkit";
import listsReducer from './sliceLists'
import configReducer from './sliceConfig'

const store = configureStore({
  reducer: {
    lists: listsReducer,
    config: configReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch