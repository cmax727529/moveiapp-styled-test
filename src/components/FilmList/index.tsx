import React, { useState } from 'react';
import styled from 'styled-components';

import Film from '../Film';
import FilmModel from '../../types/Film';

interface FilmListProps {
  films: FilmModel[];
}

const FilmList: React.FC<FilmListProps> = (props) => {
  const [activeFilmId, setActiveFilmId] = useState<string>('');
  const films: FilmModel[] = props.films;

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
      toggleFilm={toggleFilm}
      active={activeFilmId === film.id}
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
