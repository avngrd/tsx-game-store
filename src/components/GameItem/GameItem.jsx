import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../redux/cart/CartSlice';

const GameItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(setItemInCart(game));
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
        <button className="game-item__buy" onClick={handleClick}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default GameItem;
