import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cart = () => {
    return(
        <div className='cart-block'>
            <AiOutlineShoppingCart size={30} className='cart-icon'/>
            <span className='cart-total__price'>50€</span>
        </div>
    )
}

export default Cart;