import { GameItem } from '../../redux/cart/CartSlice';

export const calcTotalPrice = (items: GameItem[]) =>
  items.reduce((acc, game) => (acc += game.price), 0);
