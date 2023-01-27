import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/CartSlice';
import { RootState } from '../../redux/store';

export const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game.currentGame);
  const items = useSelector((state: RootState) => state.cart.itemsInCart);
  if (!game) return null;
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
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe width="90%" height="400px" src={game.video} title="Youtube Video Player"></iframe>
        </div>
        <div className="game-page__right">
          <img src={game.image} alt="Game" className="game-page__image" />
          <p className="game-page__description">{game.description}</p>
          <p className="secondary-text">Popular tags: </p>
          <ul className="game-page__genre-list">
            {game.genres.map((genre) => (
              <motion.li
                className="game-page__genre"
                key={genre}
                animate={{ y: 5 }}
                transition={{ repeat: Infinity, duration: 0.5 }}>
                {genre}
              </motion.li>
            ))}
          </ul>
          <button onClick={handleClick} className="game-page__item-buy">
            {isItemInCart ? 'Remove order' : ' Buy'}
          </button>
        </div>
      </div>
    </div>
  );
};
