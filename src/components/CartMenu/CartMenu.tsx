import React from 'react';
import { Link } from 'react-router-dom';
import { GameArrayProps } from '../../pages/HomePage';
import { CartItem } from '../CartItem';
import { calcTotalPrice } from '../utils/utils';
type game ={
count:number;
} 
type CartMenuProps = {
  items: GameArrayProps[];
  onClick: () => void;
};

export const CartMenu: React.FC<CartMenuProps> = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />
            ))
          : 'Nothing )='}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Summary:{calcTotalPrice(items)} €</span>
          </div>
          <Link to="/order">
            <button onClick={onClick} className="cart-menu__order">
              Order
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
