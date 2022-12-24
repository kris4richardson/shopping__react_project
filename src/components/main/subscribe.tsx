import * as React from "react";
import { Container } from "@mui/system";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { InputAdornment, Button, alpha } from "@mui/material";
import buttonSectionView from "../Button";

const StyledSub = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: 350,
}));

type Props = TextFieldProps & {
  width?: number;
};

const CustomTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "width",
})<Props>(({ width, theme }) => ({
  "& fieldset": {
    display: "none",
  },
  "& .MuiOutlinedInput-root": {
    width: "55vh",
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
      <Container
        sx={{
          height: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(/img/subscribe-banner.png)",
        }}
        maxWidth={"xl"}
      >
        <CustomTextField
          fullWidth
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {buttonSectionView("send")}
              </InputAdornment>
            ),
            sx: { pr: 0.5 },
          }}
        />
      </Container>
      //{" "}
    </StyledSub>
  );
}
