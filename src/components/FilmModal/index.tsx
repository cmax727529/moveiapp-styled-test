import React, { useState } from 'react';
import {
  Button, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Checkbox,
} from '@material-ui/core';

import FilmModel, { Genres } from '../../types/Film';
import GenreSelect from './GenreSelect';
import validForm, { Validation } from './validation';

interface FilmModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (film: FilmModel) => void;
}

const noErrors: Validation = {
  title: '',
  cover: '',
  year: '',
  genre: '',
  director: '',
  synopis: '',
};

const FilmModal: React.FC<FilmModalProps> = ({
  open, handleClose, handleSave,
}) => {
  const [film, setFilm] = useState<FilmModel>({
    id: '',
    title: '',
    cover: '',
    genre: Genres.HORROR,
    adult: false,
    year: 2020,
    director: '',
    synopis: '',
  });
  const [errors, setErrors] = useState<Validation>(noErrors);

  const handleChange = (event: any) => {
    setFilm({
      ...film,
      [event.target.name]: event.target.name === 'adult' ? event.target.checked : event.target.value,
    });
  };

  const handleClickSave = () => {
    const [hasError, errrorMsgs] = validForm(film);

    if (hasError) {
      setErrors(errrorMsgs);
    } else {
      setErrors(noErrors);
      handleSave(film);
      handleClose();
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Film</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter information for new film
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          value={film.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          autoFocus
          margin="dense"
          name="cover"
          label="Cover Image"
          type="text"
          fullWidth
          value={film.cover}
          onChange={handleChange}
          error={!!errors.cover}
          helperText={errors.cover}
        />
        <GenreSelect
          name="genre"
          value={film.genre}
          handleChange={handleChange}
          errors={errors}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={film.adult}
              onChange={handleChange}
              name="adult"
              color="primary"
            />
          }
          label="18+"
        />
        <TextField
          autoFocus
          margin="dense"
          name="year"
          label="Year"
          type="text"
          fullWidth
          value={film.year}
          onChange={handleChange}
          error={!!errors.year}
          helperText={errors.year}
        />
        <TextField
          autoFocus
          margin="dense"
          name="director"
          label="Director"
          type="text"
          fullWidth
          value={film.director}
          onChange={handleChange}
          error={!!errors.director}
          helperText={errors.director}
        />
        <TextField
          autoFocus
          multiline
          margin="dense"
          name="synopis"
          label="Synopis"
          type="text"
          fullWidth
          value={film.synopis}
          onChange={handleChange}
          error={!!errors.synopis}
          helperText={errors.synopis}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClickSave} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilmModal;
