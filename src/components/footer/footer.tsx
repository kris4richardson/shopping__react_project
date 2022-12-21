import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

const footer =  {
  background: "#000000",
  height: '30vh' 
}

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  sx = {footer}maxWidth="xl">
      </Container>
    </React.Fragment>
  );
}