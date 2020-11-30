import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import FilmModel from '../../types/Film';
import RatingModel from '../../types/Rating';
import FilmList from '../../components/FilmList';
import FilmModal from '../../components/FilmModal';
import DefaultFilms from './data';

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

  const addFilmRating = (filmId: string, rating: RatingModel) => {
    const film = films.find(f => f.id === filmId);
    if (!film) return;

    const newFilms = films.map(f => {
      if (f.id === filmId) {
        return {
          ...f,
          ratings: [...film.ratings, rating],
        }
      }
      return f;
    })

    setFilms(newFilms);
  }

  return (
    <MoviesWrapper>
      <Actions>
        <Button variant="contained" onClick={showModal}>Add Film</Button>
      </Actions>
      <FilmList films={films} handleAddRating={addFilmRating} />

      { modal && (
        <FilmModal
          open={modal}
          handleClose={closeModal}
          handleSave={addFilm}
        />
      )}
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
