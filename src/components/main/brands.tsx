import * as React from "react";
import { Box, Container, Grid, Paper, Stack } from "@mui/material";

export default function BrandsContainer() {
  return (
    <Box
      sx={{
        bgcolor: "#ebd96b",
        margin: 0,
        width: "100%",
        height: 70,
      }}
    >
      <Container
        sx={{
          height: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(/img/brands.png)",
        }}
        maxWidth={"xl"}
      ></Container>
    </Box>
  );
}
