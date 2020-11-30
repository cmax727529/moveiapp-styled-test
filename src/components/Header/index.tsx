import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6">
        VTS
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
