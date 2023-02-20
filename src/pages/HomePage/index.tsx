import React from 'react';
import anime from 'animejs';
import GameItem from '../../components/GameItem/GameItem';

export type GameArrayProps = {
  image: string;
  title: string;
  genres: string[];
  price: number;
  video: string;
  id: number;
  description: string;
};

export type dsadProps = {
  image: string;
  id: number;
  description: string;
};

const GAMES = [
  {
    image: 'img/forza_5.jpeg',
    title: 'Forza Horizon 5',
    genres: ['Race', 'Simulator', 'Open World'],
    price: 40,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description:
      'An endless kaleidoscope of Horizon adventures awaits you! Take exciting trips through the incredibly beautiful and original world of Mexico behind the wheel of the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!',
  },
  {
    image: 'img/dota2.jpg',
    title: 'Dota 2',
    genres: ['Strategy', 'Action', 'МОВА'],
    video: 'https://www.youtube.com/watch?v=Xx0YUuvW4wA',
    price: 10,
    id: 2,
    description:
      'Every day, millions of players around the world fight as one of over a hundred Dota 2 heroes, and even after a thousand hours there is still a lot to learn. Thanks to regular updates, the game lives its own life: the gameplay, features and heroes are constantly changing.',
  },
  {
    image: 'img/life_is_strange_true_colors.jpeg',
    title: 'Life is Strange True Colors',
    genres: ['Magical', 'Mystic'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 30,
    id: 3,
    description:
      'Alex Chen hides from everyone his "curse" - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - allegedly in an accident - Alex uses her to find out the truth.',
  },
  {
    image: 'img/gta_v.jpeg',
    title: 'Grand Theft Auto V',
    genres: ['Open World', 'Action'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 40,
    id: 4,
    description:
      'Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and beyond at 60 frames per second.',
  },
  {
    image: 'img/rainbow_siege.jpeg',
    title: "Tom Clancy's Rainbow Six® Siege",
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Tactics', 'Shooter'],
    price: 60,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.",
  },
  {
    image: 'img/assassins_creed_valhalla.png',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Mystic', 'RPG', 'Open World'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 78,
    id: 6,
    description:
      'Assassins Creed Valhalla is a multi-platform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassins Creed series.',
  },
];

const HomePage: React.FC = () => {
  const animateLogos = () => {
    anime({
      targets: '.homepage-logo__steam',
      translateY: 70,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.homepage-logo__origin',
      translateY: 90,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.homepage-logo__eg',
      translateY: 110,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.homepage-logo__steam-right',
      translateY: 70,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.homepage-logo__origin-right',
      translateY: 90,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.homepage-logo__eg-right',
      translateY: 110,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
  };

  React.useEffect(() => {
    animateLogos();
  }, []);
  return (
    <div className="homepage">
      <div className="games">
        {GAMES.map((game) => (
          <GameItem game={game} key={game.title} />
        ))}
      </div>
      <div>
        <div className="homepage-logos">
          <img className="homepage-logo__steam" src="img/steam.png" alt="Steam" />
          <img className="homepage-logo__origin" src="img/origin.png" alt="Origin" />
          <img className="homepage-logo__eg" src="img/eg.png" alt="EpicGames" />
        </div>
        <div className="homepage-logos__right">
          <img className="homepage-logo__steam-right" src="img/steam.png" alt="Steam" />
          <img className="homepage-logo__origin-right" src="img/origin.png" alt="Origin" />
          <img className="homepage-logo__eg-right" src="img/eg.png" alt="EpicGames" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
