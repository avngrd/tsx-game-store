import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/cart/CartSlice';

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__img">
        <img src={game.image} alt="Game" />
      </div>

      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} €</span>
        <AiOutlineCloseCircle size={25} onClick={handleClick} className="cart-item__delete-icon" />
      </div>
    </div>
  );
};
