import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import "./brands.css"
export default function BrandsContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="brands-section" maxWidth="xl">
        <Box className="brands-box" sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
      </Container>
    </React.Fragment>
  );
}