import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import favoritesReducer from './addFavorites';


const store = configureStore({
  reducer: {
    filter: filterReducer,
    favorites: favoritesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;