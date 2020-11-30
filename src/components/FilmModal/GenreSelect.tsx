import React from 'react';
import styled from 'styled-components';
import {
  FormControl, FormHelperText, InputLabel, MenuItem, Select,
} from '@material-ui/core';

import { Genres } from '../../types/Film';
import { Validation } from './validation';

interface GenreSelectProps {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
  errors: Validation,
}

const GenreSelect: React.FC<GenreSelectProps> = ({
  value, handleChange, errors, name,
}) => {
  const genreList = Genres as any;

  return (
    <GenreSelectWrapper error={!!errors.genre}>
      <InputLabel id="genre-select">Select Genre</InputLabel>
      <Select
        labelId="genre-select"
        value={value}
        onChange={handleChange}
      >
        { Object.keys(genreList).map(key => (
          <MenuItem key={key} value={genreList[key]}>{genreList[key]}</MenuItem>
        ))}
      </Select>
      { !!errors.genre && <FormHelperText>{errors.genre}</FormHelperText> }
    </GenreSelectWrapper>
  );
};

const GenreSelectWrapper = styled(FormControl)`
  width: 100%;
`;

export default GenreSelect;
