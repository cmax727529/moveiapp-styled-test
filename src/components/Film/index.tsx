import React from 'react';
import styled from 'styled-components';
import {
  CardContent, CardHeader, Collapse, Typography,
} from '@material-ui/core';

import FilmModel from '../../types/Film';
import RatingModel from '../../types/Rating';
import AdultIcon from './plus-18.png';
import RatingList from '../RatingList';

interface FilmProps {
  film: FilmModel;
  active?: boolean;
  toggleFilm: (filmId: string) => void;
  handleAddRating: (filmId: string, rating: RatingModel) => void;
}

const Film: React.FC<FilmProps> = ({
  film, active, toggleFilm, handleAddRating,
}) => {
  const handleClick = () => {
    toggleFilm(film.id);
  };

  return (
    <FilmWrapper active={active}>
      <CardHeader
        action={
          film.adult ? <img src={AdultIcon} alt={film.title} /> : null
        }
        title={film.title}
        subheader={`${film.director}, ${film.year}`}
        onClick={handleClick}
      />
      <Collapse in={active}>
        <FilmImage src={film.cover} title={film.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {film.synopis}
          </Typography>
        </CardContent>
        <RatingList
          filmId={film.id}
          ratings={film.ratings}
          handleAddRating={(rating) => handleAddRating(film.id, rating)}
        />
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
