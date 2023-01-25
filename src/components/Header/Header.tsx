import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          TSX Game Store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
