import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating as MuiRating } from '@material-ui/lab';
import { Button, TextField, Typography } from '@material-ui/core';

import RatingModel from '../../types/Rating';

interface RatingFormProps {
  filmId: string;
  handleAdd: (rating: RatingModel) => void;
}

const RatingForm: React.FC<RatingFormProps> = ({
  filmId, handleAdd,
}) => {
  const [name, setName] = useState<string>('');
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.length === 0) {
      return;
    }

    handleAdd({
      name,
      rating: rating || 0,
      comment,
    });

    setName('');
    setRating(0);
    setComment('');
  }

  return (
    <RatingFormWrapper onSubmit={handleSubmit}>
      <Typography>Add rating for this movie</Typography>
      <MuiRating
        name={`${filmId}-new-rating`}
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <TextField
        autoFocus
        fullWidth
        margin="none"
        name="name"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!name}
        helperText={name ? '' : 'should be present'}
      />
      <TextField
        autoFocus
        multiline
        fullWidth
        margin="none"
        name="comment"
        label="Comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="contained" type="submit">Add</Button>
    </RatingFormWrapper>
  );
}

const RatingFormWrapper = styled.form`
  padding: 1rem;
`;

export default RatingForm;
