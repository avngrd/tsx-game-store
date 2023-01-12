import React from 'react';

const GameItem = ({ game }) => {
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
        <button className="game-item__buy">Buy</button>
      </div>
    </div>
  );
};

export default GameItem;
