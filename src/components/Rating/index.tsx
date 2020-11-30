import React from 'react';

import RatingModel from '../../types/Rating';

interface RatingProps {
  rating: RatingModel;
}

const Rating: React.FC<RatingProps> = () => {
  return (
    <div>Ratings</div>
  );
};

export default Rating;
