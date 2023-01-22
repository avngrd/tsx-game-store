import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import { calcTotalPrice } from '../../components/utils/utils';

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>No orders</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">{calcTotalPrice(items)}</div>
      </div>
    </div>
  );
};
