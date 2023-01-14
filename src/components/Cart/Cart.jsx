import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  return (
    <div className="cart-block">
      <AiOutlineShoppingCart size={30} className="cart-icon" />
      <span className="cart-total__price">{totalPrice}€</span>
    </div>
  );
};

export default Cart;
