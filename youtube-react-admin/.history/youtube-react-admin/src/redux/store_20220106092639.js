// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from './userSlice'


// export default configureStore({
//   reducer: {
//     user: userSlice,
//   },
// })
import { configureStore } from '@reduxjs/toolkit'

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

    user: userSlice
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})