import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cartRedux'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    cart: counterReducer,
    user: userSlice
  },
})