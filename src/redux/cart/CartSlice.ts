import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameItem = {
  image: string;
  title: string;
  genres: string[];
  price: number;
  video: string;
  id: number;
  description: string;
};

interface CartSliceState {
  itemsInCart: GameItem[];
}

const initialState: CartSliceState = {
  itemsInCart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemInCart: (state, action: PayloadAction<GameItem>) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.itemsInCart = state.itemsInCart.filter((game) => game.id !== action.payload);
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;
