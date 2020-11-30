import FilmModel, { Genres } from '../../types/Film';

const DefaultFilms: FilmModel[] = [
  {
    id: 'javascript',
    title: 'Javascript',
    cover: 'https://via.placeholder.com/150',
    genre: Genres.HORROR,
    adult: false,
    year: 2020,
    director: 'google',
    synopis: 'Javascript is browser scripting language',
    ratings: [],
  },
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    cover: 'https://via.placeholder.com/200',
    genre: Genres.THRILLER,
    adult: true,
    year: 2010,
    director: 'basecamp',
    synopis: 'Ruby on Rails is ruby based web framework.',
    ratings: [],
  },
  {
    id: 'typescript',
    title: 'Typescript',
    cover: 'https://via.placeholder.com/100',
    genre: Genres.ROMANTIC,
    adult: false,
    year: 2020,
    director: 'microsoft',
    synopis: 'Typescript is a static type checker',
    ratings: [],
  },
];

export default DefaultFilms;
