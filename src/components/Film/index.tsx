import React from 'react';
import styled from 'styled-components';
import {
  CardContent, CardHeader, Collapse, Typography,
} from '@material-ui/core';

import FilmModel from '../../types/Film';
import AdultIcon from './plus-18.png';
import RatingList from '../RatingList';

interface FilmProps {
  film: FilmModel;
  active?: boolean;
  toggleFilm: (filmId: string) => void;
}

const Film: React.FC<FilmProps> = ({film, active, toggleFilm}) => {
  const handleClick = () => {
    toggleFilm(film.id);
  };

  return (
    <FilmWrapper onClick={handleClick} active={active}>
      <CardHeader
        action={
          film.adult ? <img src={AdultIcon} alt={film.title} /> : null
        }
        title={film.title}
        subheader={`${film.director}, ${film.year}`}
      />
      <Collapse in={active}>
        <FilmImage src={film.cover} title={film.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {film.synopis}
          </Typography>
        </CardContent>
        <RatingList ratings={film.ratings} />
      </Collapse>
    </FilmWrapper>
  )
};

const FilmWrapper = styled.div<{active?: boolean}>`
  cursor: pointer;
  border: ${props => props.active ? 'none' : '1px solid black'};
  background: lightgray;
`;

const FilmImage = styled.img`
  margin: auto;
  display: block;
`;

export default Film;
