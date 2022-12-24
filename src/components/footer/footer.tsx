import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const footer = {
  background: "#000000",
  height: 200,
};

const StyledFooter = styled('div')(() => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'space-between',
  padding: 8,
}));

export default function Footer() {
  return (
      <Box>
        <Container 
        sx={footer} 
        maxWidth="xl" >
          <StyledFooter >
          <Stack spacing={2} >
        <Box color={"#D9D9D9"}>FASHION</Box>
                <Box>
                <Typography color={"#8E8E8E"}>Complete your style with awesome clothes from us.</Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Link href="/">
                  <Box component="img" src="/img/facebook.png" height={"6vh"}></Box>
                </Link>
                <Link href="/">
                  <Box component="img" src="/img/instagram.png" height={"6vh"}></Box>
                </Link>
                <Link href="/">
                  <Box component="img" src="/img/twitter.png" height={"6vh"}></Box>
                </Link>
                <Link href="/">
                  <Box component="img" src="/img/linkedin.png" height={"6vh"}></Box>
                </Link>
              </Stack>
              </Stack>
          <Grid container spacing="{5}">
            <Grid item xs={12} sm={4}>
              <Box color={"#D9D9D9"}>Company</Box>
                <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>About</Link>
              </Box>
              <Box>
                <Link href="/" color={"#8E8E8E"} underline="none">Contact us</Link>
              </Box>
              <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Support</Link>
              </Box>
              <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Careers</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box color={"#D9D9D9"}>Quick link</Box>
                <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Share Location</Link>
              </Box>
              <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Orders Tracking</Link>
              </Box>
              <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Size Guide</Link>
              </Box>
              <Box>
                <Link href="/" underline="none" color={"#8E8E8E"}>FAQs</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box color={"#D9D9D9"}>Legal</Box>
                <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Terms & conditions</Link>
              </Box>
              <Box>
                <Link href="/" underline="none"color={"#8E8E8E"}>Privacy Policy</Link>
              </Box>
            </Grid>
          </Grid>
        </StyledFooter>
        </Container>
      </Box>
  );
}
