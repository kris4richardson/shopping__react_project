import * as React from 'react';
import { Box, Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Grid, Link } from '@mui/material';

const StyledApps = styled('div')(() => ({
  top: 0,
  left: 0,
  width: '100%',
  height: '90vh',
  display: "flex",
  alignItems:"center",
  justifyContent:"center"
}));

export default function AppsContainer() {
  return (
    <StyledApps>
      <Container  sx={{ height: 1, backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', 
          backgroundImage: 'url(/img/vouchers.png)', m:2, display: "flex",
          alignItems:"center",
          justifyContent:"start",
          }} maxWidth={'lg'} >
            <Box sx={{ mt: "12rem", ml: "" }}>
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
        </Box>
      </Container>
      </StyledApps>
  );
}