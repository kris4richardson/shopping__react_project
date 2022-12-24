import * as React from "react";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Grid, Link, Paper } from "@mui/material";

const StyledApps = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "salmon",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AppsContainer() {
  return (
    <StyledApps>
      <Container
        sx={{
          height: 1,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(/img/vouchers.png)",
          m: 3,
          display: "flex",
          alignItems: "center",
        }}
        maxWidth={"lg"}
      >
        <Grid container spacing={0} sx={{ mt: "12rem" }} maxWidth="lg">
          <Grid item sm={2} md={2} lg={2}>
            <Item>
              <Link>
                <Box
                  component="img"
                  alt="element"
                  src="/img/app-store.png"
                  sx={{ width: "100%" }}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item sm={2} md={2} lg={2}>
            <Item>
              <Link href="/">
                <Box
                  component="img"
                  alt="element"
                  src="/img/google-play.png"
                  sx={{ width: "100%" }}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item sm={8} md={8} lg={8}>
            <Item></Item>
          </Grid>
        </Grid>
      </Container>
    </StyledApps>
  );
}
