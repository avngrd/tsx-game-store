import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;

  return (
    <div className="game-page">
      <Header />
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe width="90%" height="400px" src={game.video} title="Youtube Video Player"></iframe>
        </div>
        <div className="game-page__right">
          <img src={game.image} alt="Game" />
          <p>{game.description}</p>
          <p className="secondary-text">Popular tags: </p>
          {game.genres.map((genre) => (
            <div className="game-page__genre" key={genre}>
              {genre}
            </div>
          ))}
          {/* <div className="game-page__buy-game" game={game}></div> */}
        </div>
      </div>
    </div>
  );
};
