import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cartRedux'

export default configureStore({
  reducer: {
    cart: counterReducer,
  },
})