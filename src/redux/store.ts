import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart/CartSlice';
import GamesSlice from './games/GamesSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    game: GamesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
