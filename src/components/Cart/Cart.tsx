import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { calcTotalPrice } from '../utils/utils';
import { CartMenu } from '../CartMenu/CartMenu';
import { createBrowserHistory } from '@remix-run/router';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);
  const items = useSelector((state: RootState) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history = createBrowserHistory();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push('/order');
  }, [history]);

  return (
    <div className="cart-block">
      {items.length > 0 ? <span className="cart-game__count">{items.length}</span> : null}
      <AiOutlineShoppingCart
        size={30}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? <span className="cart-total__price">{totalPrice}€</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default Cart;
