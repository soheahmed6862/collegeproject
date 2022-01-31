import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cartRedux'
import registerSlice from './registerSlice';
import userSlice from './userSlice'


const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};
const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};
export default configureStore({
  reducer: {
    register:registerSlice,
    cart: counterReducer,
    user: userSlice,
   
  },
  // preloadedState: reHydrateStore(),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
})