import * as React from 'react';
import { styled } from '@mui/material/styles';
import  {Container, Grid} from '@mui/material';
import buttonSectionView from '../button';


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
  
  return (
    <StyledRoot>
      <StyledHeaderMain>
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
        {/* <Grid container spacing={10} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} sx={{ height: 1 }}> */}
            {buttonSectionView("sign up")}
            
          {/* </Grid>
        </Grid> */}
      </Container>
      </StyledHeaderMain>
    </StyledRoot>
  );
}