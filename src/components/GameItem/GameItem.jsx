import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/CartSlice';

const GameItem = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (event) => {
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="game-item">
      <div className="game-item__details">
        <div className="game-cover">
          <img src={game.image} alt={game.title} />
        </div>
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          <ul className="game-item__genre-list">
            {game.genres.map((genre) => (
              <li key={game.id}>{genre}</li>
            ))}
          </ul>
        </div>
        <div className="game-item__price">{game.price} €</div>
        <button
          className="game-item__buy"
          onClick={handleClick}
          type={isItemInCart ? 'secondary' : 'primary'}>
          {isItemInCart ? 'Remove order' : ' Buy'}
        </button>
      </div>
    </div>
  );
};

export default GameItem;
