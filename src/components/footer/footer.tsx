import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import "./footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="footer" maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
      </Container>
    </React.Fragment>
  );
}