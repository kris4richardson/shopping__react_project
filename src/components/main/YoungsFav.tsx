import * as React from "react";
import {
  Box,
  Toolbar,
  Grid,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function YoungsFav() {
  return (
    <Box
      sx={{
        margin: 0,
        width: "100%",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={2} sx={{ height: 1 }}>
          <Grid item xs={6} md={6} lg={6} sx={{ height: 1 }}>
            <Card>
              <CardMedia
                component="img"
                alt="trending"
                height="100%"
                image="/img/trending.png"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Trending on instagram
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
          <Grid item xs={6} md={6} lg={6} sx={{ height: 1 }}>
            <Card>
              <CardMedia
                component="img"
                alt="under40"
                height="100%"
                image="/img/under40.png"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  All Under $40
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
