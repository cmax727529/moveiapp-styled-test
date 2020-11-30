import React from 'react';
import styled from 'styled-components';

import RatingModel from '../../types/Rating';
import Rating from '../Rating';
import RatingForm from '../RatingForm';

interface RatingListProps {
  ratings?: RatingModel[];
}

const RatingList: React.FC<RatingListProps> = ({
  ratings,
}) => {
  return (
    <RatingListWrapper>
      { (ratings || []).map(rating => <Rating rating={rating} />) }

      <RatingForm />
    </RatingListWrapper>
  )
}

const RatingListWrapper = styled.div`
  padding-top: 0.5rem;
`;

export default RatingList;
