import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';

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
            {/* <Grid container spacing={10} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} sx={{ height: 1 }}> */}
          <Stack
          direction="row"
          justifyContent="start"
        >
          <Link href="/">
          <Box
            component="img"
            alt="element"
            src="/img/app-store.png"
            sx={{ height: 40 }}
          />
          </Link>
          <Link href="/">
          <Box
            component="img"
            alt="element"
            src="/img/google-play.png"
            sx={{ height: 40 }}
          />
          </Link>
        </Stack>
          {/* </Grid> */}
        {/* </Grid> */}
      </Container>
      </StyledApps>
  );
}