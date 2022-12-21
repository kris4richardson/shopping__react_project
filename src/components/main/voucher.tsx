import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

export default function VoucherContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }} />
      </Container>
    </React.Fragment>
  );
}