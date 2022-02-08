import * as React from 'react';
import {CircularProgress, Box} from '@mui/material/';


const Spinner =() => {
  return (
    <Box sx={{ display: 'flex', margin: 5, justifyContent: 'center'}}>
      <CircularProgress />
    </Box>
  );
}

export default Spinner;