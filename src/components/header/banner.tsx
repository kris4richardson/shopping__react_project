import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Link, Paper } from "@mui/material";
import {buttonSectionView__lg} from "../Button";

const StyledRoot = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: 480,
}));

const StyledHeaderMain = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "bottom",
  padding: 8,
  height: "100%",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "salmon",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <StyledRoot>
      <StyledHeaderMain>
        <Container
          sx={{
            marginTop: 4,
            height: 1,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(/img/hero-banner.png)",
            borderRadius: 6,
          }}
          maxWidth={"xl"}
        >
          <Grid container spacing={0} sx={{ mt: "20rem" }} maxWidth="lg">
          <Grid item sm={4} md={4} lg={4}>
            <Item>
            {buttonSectionView__lg("Shop Now")}
            </Item>
          </Grid>
          
          <Grid item sm={8} md={8} lg={8}>
            <Item></Item>
          </Grid>
        </Grid>
          
        </Container>
      </StyledHeaderMain>
    </StyledRoot>
  );
}
