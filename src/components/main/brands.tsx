import * as React from "react";
import { Box, Container, Grid } from "@mui/material";

export default function BrandsContainer() {
  return (
    <Box
      sx={{
        bgcolor: "#ebd96b",
        margin: 0,
        width: "100%",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={3} sx={{ height: 1 }}>
          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/h&m.png" />
          </Grid>
          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/obey.png" />
          </Grid>

          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/shopify.png" />
          </Grid>
          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/lacoste.png" />
          </Grid>
          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/levi's.png" />
          </Grid>
          <Grid item xs={4} md={3} lg={2} sx={{ height: 1 }}>
            <Box component="img" src="/img/amazon.png" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
