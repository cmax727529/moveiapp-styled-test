import FilmModel from '../../types/Film';

export type Validation = {
  title: string,
  cover: string,
  year: string,
  genre: string,
  director: string,
  synopis: string,
};

type formFunc = (film: FilmModel) => [boolean, Validation];

const validForm: formFunc = (film: FilmModel) => {
  const errors: Validation = {
    title: '',
    cover: '',
    year: '',
    genre: '',
    director: '',
    synopis: '',
  };
  let hasError = false;

  if (!film.title) {
    errors.title = 'should be present';
    hasError = true;
  } else if (film.title.length > 25) {
    errors.title = 'should be less than 25 chars';
    hasError = true;
  }

  const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  if (!film.cover) {
    errors.cover = 'should be present';
    hasError = true;
  } else if (!urlRegex.test(film.cover)) {
    errors.cover = 'should be url';
    hasError = true;
  }

  if (!film.genre) {
    errors.genre = 'should be present';
    hasError = true;
  }

  if (film.year > new Date().getFullYear()) {
    errors.year = 'should be less than current year';
    hasError = true;
  }

  if (!film.director) {
    errors.director = 'should be present';
    hasError = true;
  } else if (film.director.length > 20) {
    errors.director = 'should be less than 20 chars';
    hasError = true;
  }

  if (!film.synopis) {
    errors.synopis = 'should be present';
    hasError = true;
  } else if (film.synopis.length > 250) {
    errors.synopis = 'should be less than 250 chars';
    hasError = true;
  }

  return [hasError, errors];
};

export default validForm;
