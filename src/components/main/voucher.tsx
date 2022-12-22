import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

const StyledBox = styled('div')(() => ({
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
}));

 const StyledVoucher = styled('div')(() => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'bottom',
  padding: 8,
  height: '70%',
}));

export default function VoucherContainer() {
  const ShopNowButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#000000",
    '&:hover': {
      backgroundColor: "#000000",
    },
  }));
  
  const buttonSectionView = () => {
    return (
      <StyledVoucher>
        <Stack
          direction="row"
          justifyContent="center"
          divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }} />}
          sx={{ typography: 'h2', bottom: 0, position: 'absolute', marginBottom: 32 }}
        >
          <ShopNowButton  variant="contained">Shop now</ShopNowButton>
        </Stack>
      </StyledVoucher>
    )
  }
  return (
    <StyledBox>
      <Container
        sx={{
          // marginTop: 8,
          height: 1,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/banner.png)',
        }}
        maxWidth={'xl'}
      >
        <Grid container spacing={10} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} sx={{ height: 1 }}>
            {buttonSectionView()}
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}