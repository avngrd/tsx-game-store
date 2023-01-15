import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { calcTotalPrice } from '../utils/utils';
import { CartMenu } from '../CartMenu/CartMenu';

const Cart = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <AiOutlineShoppingCart
        size={30}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? <span className="cart-total__price">{totalPrice}€</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default Cart;
