import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart/CartSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
