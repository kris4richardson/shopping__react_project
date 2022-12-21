import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BrandsContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "20vh", background: "#ebd96b"}} maxWidth="xl">
        <Stack 
        direction="row" 
        spacing={3}
        alignItems="center">
          <Box
        component="img"
        sx={{
          width: "16vh",

        }}
        src ="/img/h&m.png"
        />
          <Box
        component="img"
        sx={{
          width: "16vh",

        }}
        src ="/img/obey.png"
        />
         <Box
        component="img"
        sx={{
          width: "20vh",

        }}
        src ="/img/shopify.png"
        />
         <Box
        component="img"
        sx={{
          width: "20vh",

        }}
        src ="/img/lacoste.png"
        />
         <Box
        component="img"
        sx={{
          width: "16vh",

        }}
        src ="/img/levi's.png"
        />
           <Box
        component="img"
        sx={{
          width: "16vh",

        }}
        src ="/img/amazon.png"
        />
        </Stack>
      </Container>
    </React.Fragment>
  );
}
