import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const ErrorPage  = () => {
  return (
    <div className='DetailBox'>
        <Stack sx={{ width: '60%', margin:'60px auto'}}  >
            <Alert severity="error" sx={{justifyContent:'center'}}>
                <AlertTitle>Error</AlertTitle>
                The page you are looking for was not found - <strong><Link to='/'>GO HOME</Link></strong>
            </Alert>
        </Stack>
    </div>
  );
};

export default ErrorPage;