import * as React from "react";
import {
  Box,
  Toolbar,
  Grid,
  Paper,
  Container,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function NewArrivals() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = `
  <Grid container spacing={${spacing}}>
  `;

  return (
    <Box
      sx={{
        margin: 0,
        width: "100%",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} sx={{ height: 1 }}>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="hoodies"
                height="100%"
                image="/img/hoodies.png"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Hoodies & Sweetshirt
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore Now!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="coats"
                height="100%"
                image="/img/coats.png"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Coats & Parkas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore Now!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} md={3} lg={4} sx={{ height: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="tees"
                height="100%"
                image="/img/tees.png"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Tees & T-Shirt
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore Now!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
