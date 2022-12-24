import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Box, Grid, InputAdornment, Paper } from "@mui/material";
import buttonSectionView from "../Button";

type Props = TextFieldProps & {
  width?: number;
};

const StyledSub = styled("div")(() => ({
  width: "100%",
  height: 350,
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: "url(/img/subscribe-banner.png)",
  display: "flex",
  alignItems: "flex-end",
}));

const Item = styled('div')(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "width",
})<Props>(({ width, theme }) => ({
  "& fieldset": {
    display: "none",
  },
  "& .MuiOutlinedInput-root": {
    width: "64vh",
    backgroundColor: "#fff",

    transition: theme.transitions.create(["box-shadow", "width"], {
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      boxShadow: 20,
      ...(width && {
        [theme.breakpoints.up("sm")]: {
          width: width + 60,
        },
      }),
    },
  },
}));

export default function SubscribeContainer() {
  return (
    <StyledSub>
      <Box sx={{ flexGrow: 1, mb: 9 }}>
        <Grid container spacing={1}>
          <Grid item sm={2} md={2} lg={4}>
            <Item></Item>
          </Grid>
          <Grid item sm={8} md={8} lg={4}>
            <Item>
              <CustomTextField
                fullWidth
                placeholder="Enter your email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {buttonSectionView("send")}
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5 },
                }}
              />
            </Item>
          </Grid>
          <Grid item sm={2} md={2} lg={4}>
            <Item></Item>
          </Grid>
        </Grid>
      </Box>
    </StyledSub>
  );
}
