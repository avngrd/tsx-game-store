import { createSlice } from '@reduxjs/toolkit';

// @ts-ignore
const initialState: GameSliceState = {
  currentGame: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
