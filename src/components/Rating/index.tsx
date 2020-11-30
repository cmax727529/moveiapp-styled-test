import React from 'react';
import styled from 'styled-components';
import { Rating as MuiRating } from '@material-ui/lab';

import RatingModel from '../../types/Rating';
import { Typography } from '@material-ui/core';

interface RatingProps {
  filmId: string;
  rating: RatingModel;
  index: number;
}

const Rating: React.FC<RatingProps> = ({
  filmId, rating, index,
}) => {
  return (
    <RatingWrapper>
      <MuiRating name={`${filmId}-rating-${index}`} value={rating.rating} readOnly />
      <RatingDetail>{ `Name: ${rating.name}` }</RatingDetail>
      { rating.comment && (
        <RatingDetail>{ `Comment: ${rating.comment}` }</RatingDetail>
      )}
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid gray;
`;

const RatingDetail = styled(Typography)`
  margin-left: 0.4rem;
`;

export default Rating;
