import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/OrderItem/OrderItem';

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
    </div>
  );
};
