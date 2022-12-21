import * as React from 'react';
import { Box, Toolbar, Grid, Paper} from '@mui/material';



export default function YoungsFav() {
 
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

   const jsx = `
  <Grid container spacing={${spacing}}>
  `;

  return (
    <Box component="main" sx={{ p: 2 }}>
    <Toolbar />
    <Grid sx={{ flexGrow: 1, m: 3 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);
}
  