import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

export default function AppsContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
      </Container>
    </React.Fragment>
  );
}