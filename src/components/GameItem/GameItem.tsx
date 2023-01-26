import React from 'react';
import { createBrowserHistory } from '@remix-run/router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/CartSlice';
import { setCurrentGame } from '../../redux/games/GamesSlice';
import { RootState } from '../../redux/store';
import { GameArrayProps } from '../../pages/HomePage';

export type GameItemProps = {
  game: GameArrayProps;
};

const GameItem: React.FC<GameItemProps> = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
      console.log(event);
    }
  };

  const gameClick = () => {
    const history = createBrowserHistory();
    history.push(`/${game.title}`);
    dispatch(setCurrentGame(game));
  };
  console.log(game);
  return (
    <div className="game-item" onClick={gameClick}>
      <div className="game-item__details">
        <Link to={`/${game.title}`}>
          <div className="game-cover">
            <img src={game.image} alt={game.title} />
          </div>
        </Link>
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          <ul className="game-item__genre-list">
            {game.genres.map((genre: string) => (
              <li key={game.title}>{genre}</li>
            ))}
          </ul>
        </div>
        <div className="game-item__price">{game.price} €</div>
        <button className="game-item__buy" onClick={handleClick}>
          {isItemInCart ? 'Remove order' : ' Buy'}
        </button>
      </div>
    </div>
  );
};

export default GameItem;
