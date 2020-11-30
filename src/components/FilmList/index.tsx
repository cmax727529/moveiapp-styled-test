import React, { useState } from 'react';
import styled from 'styled-components';

import Film from '../Film';
import FilmModel from '../../types/Film';
import RatingModel from '../../types/Rating';

interface FilmListProps {
  films: FilmModel[];
  handleAddRating: (filmId: string, rating: RatingModel) => void;
}

const FilmList: React.FC<FilmListProps> = ({
  films, handleAddRating,
}) => {
  const [activeFilmId, setActiveFilmId] = useState<string>('');

  const toggleFilm = (filmId: string) => {
    if (activeFilmId === filmId) {
      setActiveFilmId('');
    } else {
      setActiveFilmId(filmId);
    }
  }

  const filmList = films.map((film) =>
    <Film
      key={film.id}
      film={film}
      active={activeFilmId === film.id}
      toggleFilm={toggleFilm}
      handleAddRating={handleAddRating}
    />
  );

  return (
    <FilmsContainer>
      { filmList }
    </FilmsContainer>
  )
};

const FilmsContainer = styled.div`
  max-width: 20rem;
  margin: auto;
`

export default FilmList;
