import React from 'react';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">{items.map((game) => game.title)}</div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Summary: </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
