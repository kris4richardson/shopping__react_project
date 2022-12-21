import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import TextField from '@mui/material/TextField';

export default function SubscribeContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '30vh' }} />
        <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="filled-basic" label="Filled" variant="filled" />
</Box>
      </Container>
    </React.Fragment>
  );
}