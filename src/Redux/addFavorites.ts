import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";

interface FavoritesState {
  selectedFavorites: string[];
}

const initialState: FavoritesState = {
  selectedFavorites: [],
};

const STORAGE_KEY = "myFavorites";

export const loadState = (): FavoritesState | undefined => {
  try {
    const serializedState = sessionStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: FavoritesState): void => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(STORAGE_KEY, serializedState);
  } catch {
    console.log();
    
  }
};

const persistedState = loadState();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: persistedState ?? initialState,
  reducers: {
    addOrRemoveCharacter(state, action: PayloadAction<string[]>) {
      action.payload.forEach((character) => {
        const index = state.selectedFavorites.indexOf(character);
        if (index !== -1) {
          state.selectedFavorites.splice(index, 1);
        } else {
          state.selectedFavorites.push(character);
        }
      });
    },
    removeAll(state) {
      state.selectedFavorites = [];
    },
  },
});

export const useFavoritesState = (): FavoritesState => {
  const state = useSelector((state: RootState) => state.favorites);
  useEffect(() => {
    saveState(state);
  }, [state]);
  return state;
};

export const { addOrRemoveCharacter, removeAll } = favoritesSlice.actions;

export default favoritesSlice.reducer;


