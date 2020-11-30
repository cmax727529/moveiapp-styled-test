import React from 'react';
import styled from 'styled-components';

import RatingModel from '../../types/Rating';
import Rating from '../Rating';
import RatingForm from '../RatingForm';

interface RatingListProps {
  filmId: string;
  ratings: RatingModel[];
  handleAddRating: (rating: RatingModel) => void;
}

const RatingList: React.FC<RatingListProps> = ({
  filmId, ratings, handleAddRating,
}) => {
  const hasRatings = ratings.length > 0;
  return (
    <RatingListWrapper>
      {hasRatings && (
        <RatingLists>
          { (ratings || []).map((rating, index) => (
            <Rating key={`${filmId}-${index}`} filmId={filmId} rating={rating} index={index} />
          ))}
        </RatingLists>
      )}

      <RatingForm filmId={filmId} handleAdd={handleAddRating} />
    </RatingListWrapper>
  )
}

const RatingListWrapper = styled.div`
  padding: 1rem;
`;

const RatingLists = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid black;
`

export default RatingList;
