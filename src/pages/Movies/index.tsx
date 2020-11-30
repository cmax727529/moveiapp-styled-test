import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import FilmModel, { Genres } from '../../types/Film';
import FilmList from '../../components/FilmList';
import FilmModal from '../../components/FilmModal';

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

const Movies = () => {
  const [films, setFilms] = useState(DefaultFilms);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  }

  const showModal = () => {
    setModal(true);
  }

  const addFilm = (film: FilmModel) => {
    film.id = (films.length + 1).toString();
    setFilms([ ...films, film ]);
  }

  return (
    <MoviesWrapper>
      <Actions>
        <Button variant="contained" onClick={showModal}>Add Film</Button>
      </Actions>
      <FilmList films={films} />

      <FilmModal
        open={modal}
        handleClose={closeModal}
        handleSave={addFilm}
      />
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  padding: 5rem 0;
`;

const Actions = styled.div`
  text-align: right;
  margin: 0 2rem;
`;

export default Movies;
