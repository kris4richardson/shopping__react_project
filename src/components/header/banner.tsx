import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';


 const StyledRoot = styled('div')(() => ({
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
}));

 const StyledHeaderMain = styled('div')(() => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'bottom',
  padding: 8,
  height: '70%',
}));


export default function Banner() {
  const ShopNowButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#000000",
    '&:hover': {
      backgroundColor: "#000000",
    },
  }));
  
  const buttonSectionView = () => {
    return (
      <StyledHeaderMain>
        <Stack
          direction="row"
          justifyContent="center"
          divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }} />}
          sx={{ typography: 'h2', bottom: 0, position: 'absolute', marginBottom: 32 }}
        >
          <Box
            component="img"
            alt="element"
            src="/img/yellow-element.png"
            sx={{ height: 20 }}
          />
          <ShopNowButton  variant="contained">Shop now</ShopNowButton>
        </Stack>
      </StyledHeaderMain>
    )
  }
  return (
    <StyledRoot>
      <Container
        sx={{
          marginTop: 8,
          height: 1,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/hero-banner.png)',
          borderRadius: 16,
        }}
        maxWidth={'xl'}
      >
        <Grid container spacing={10} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} sx={{ height: 1 }}>
            {buttonSectionView()}
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}