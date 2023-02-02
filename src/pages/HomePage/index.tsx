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

const GAMES = [
  {
    image: 'img/forza_5.jpeg',
    title: 'Forza Horizon 5',
    genres: ['Гонки', 'Симулятор', 'Открытый мир'],
    price: 40,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description:
      'Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!',
  },
  {
    image: 'img/dota2.jpg',
    title: 'Dota 2',
    genres: ['Стратегия', 'Экшен', 'МОВА'],
    video: 'https://www.youtube.com/watch?v=Xx0YUuvW4wA',
    price: 10,
    id: 2,
    description:
      'Ежедневно миллионы игроков по всему миру сражаются от лица одного из более сотни героев Dota 2, и даже после тысячи часов в ней есть чему научиться. Благодаря регулярным обновлениям игра живёт своей жизнью: геймплей, возможности и герои постоянно преображаются.',
  },
  {
    image: 'img/life_is_strange_true_colors.jpeg',
    title: 'Life is Strange True Colors',
    genres: ['Глубокий сюжет', 'Протагонистка'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 30,
    id: 3,
    description:
      'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.',
  },
  {
    image: 'img/gta_v.jpeg',
    title: 'Grand Theft Auto V',
    genres: ['Открытый мир', 'Экшен'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 40,
    id: 4,
    description:
      'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.',
  },
  {
    image: 'img/rainbow_siege.jpeg',
    title: "Tom Clancy's Rainbow Six® Siege",
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Тактика', 'Шутер'],
    price: 60,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада - это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: 'img/assassins_creed_valhalla.png',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 78,
    id: 6,
    description:
      'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.',
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
