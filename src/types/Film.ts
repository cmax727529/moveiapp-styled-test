import Rating from './Rating';

export enum Genres {
  HORROR = 'horror',
  THRILLER = 'thriller',
  COMEDY = 'comedy',
  ROMANTIC = 'romantic',
}

interface Film {
  id: string;
  title: string;
  cover: string;
  genre: Genres;
  adult: boolean;
  year: number;
  director: string;
  synopis: string;
  ratings?: Rating[];
}

export default Film;
