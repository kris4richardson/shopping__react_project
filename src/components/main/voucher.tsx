import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { CardMedia } from '@mui/material';

export default function VoucherContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{height: '60vh', maxWidth:"sm", bgcolor: '#000000'}}>
        <CardMedia
        component="img"
        sx={{
          width: "100%",

        }}
        image ="/img/banner.png"
        />
      </Container>
    </React.Fragment>
  );
}