import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { styled } from '@mui/material/styles';

const StyledApps = styled('div')(() => ({
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
}));

export default function AppsContainer() {
  return (
    <StyledApps>
      <Container  sx={{ height: 1, backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', 
          backgroundImage: 'url(/img/vouchers.png)'}} maxWidth={'lg'}>
      </Container>
      </StyledApps>
  );
}