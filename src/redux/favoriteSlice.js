import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [], 
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const product = action.payload;
      if (!state.some(item => item.id === product.id)) {
        state.push(product);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFromFavorite: (state, action) => {
      const removedId = action.payload;
      const updatedFavorites = state.filter(item => item.id !== removedId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites; // Güncellenmiş favori listesini döndür
    },
    clearFavorites: (state) => {
      state.length = 0;
      localStorage.removeItem('favorites');
    },
    getFavorite: (state, action) => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      if (storedFavorites) {
        return storedFavorites; // Dönen değer, yeni state değeri olur
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorites,getFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
