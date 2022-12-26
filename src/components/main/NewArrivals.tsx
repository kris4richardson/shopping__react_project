import * as React from "react";
import {
  Box,
  Grid,
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Medium } from "../FontStyle";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewArrivals() {
  return (
    <Box
      sx={{
        margin: 0,
        width: "100%",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={3} sx={{ height: 1 }}>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card elevation={0} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="hoodies"
                height="100%"
                image="/img/hoodies.png"
              />
              <CardContent sx={{ padding: 0 }}>
                <Grid container spacing={0}>
                  <Grid item sm={10} md={10} lg={10}>
                    <Grid sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", px: "0" }}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          style={Medium}
                          color="#000000"
                          fontSize="3.2"
                          lineHeight="156%"
                          letterSpacing="-0.04em"
                        >
                          Hoodies & Sweetshirt
                        </Typography>
                      </Item>
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", padding: 0 }}>
                        <Typography
                          variant="body2"
                          style={Medium}
                          color="#7F7F7F"
                          fontSize="2.4"
                          lineHeight="200%"
                          letterSpacing="-0.04em"
                        >
                          Explore Now!
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} md={2} lg={2} sx={{ marginTop: "1" }}>
                    <Item sx={{ padding: "0" }}>
                      <IconButton
                        sx={{
                          color: "text.secondary",
                          pr: 0,
                          justifyContent: "flex-end",
                        }}
                      >
                        <EastIcon />
                      </IconButton>
                    </Item>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card elevation={0} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="coats"
                height="100%"
                image="/img/coats.png"
              />
              <CardContent sx={{ padding: 0 }}>
                <Grid container spacing={0}>
                  <Grid item sm={10} md={10} lg={10}>
                    <Grid sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", px: "0" }}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          style={Medium}
                          color="#000000"
                          fontSize="3.2"
                          lineHeight="156%"
                          letterSpacing="-0.04em"
                        >
                          Coats & Parkas
                        </Typography>
                      </Item>
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", padding: 0 }}>
                        <Typography
                          variant="body2"
                          style={Medium}
                          color="#7F7F7F"
                          fontSize="2.4"
                          lineHeight="200%"
                          letterSpacing="-0.04em"
                        >
                          Explore Now!
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} md={2} lg={2} sx={{ marginTop: "1" }}>
                    <Item sx={{ padding: "0" }}>
                      <IconButton
                        sx={{
                          color: "text.secondary",
                          pr: 0,
                          justifyContent: "flex-end",
                        }}
                      >
                        <EastIcon />
                      </IconButton>
                    </Item>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card elevation={0} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="tees"
                height="100%"
                image="/img/tees.png"
              />
              <CardContent sx={{ padding: 0 }}>
                <Grid container spacing={0}>
                  <Grid item sm={10} md={10} lg={10}>
                    <Grid sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", px: "0" }}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          style={Medium}
                          color="#000000"
                          fontSize="3.2"
                          lineHeight="156%"
                          letterSpacing="-0.04em"
                        >
                          Tees & T-Shirt
                        </Typography>
                      </Item>
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Item sx={{ textAlign: "left", padding: 0 }}>
                        <Typography
                          variant="body2"
                          style={Medium}
                          color="#7F7F7F"
                          fontSize="2.4"
                          lineHeight="200%"
                          letterSpacing="-0.04em"
                        >
                          Explore Now!
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} md={2} lg={2} sx={{ marginTop: "1" }}>
                    <Item sx={{ padding: "0" }}>
                      <IconButton
                        sx={{
                          color: "text.secondary",
                          pr: 0,
                          justifyContent: "flex-end",
                        }}
                      >
                        <EastIcon />
                      </IconButton>
                    </Item>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
