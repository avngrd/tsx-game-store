import React from 'react';

type CartItemProps = {
  title: string;
  price: number;
  id: number;
};

export const CartItem: React.FC<CartItemProps> = ({ title, price, id }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} €</span>
      </div>
    </div>
  );
};
