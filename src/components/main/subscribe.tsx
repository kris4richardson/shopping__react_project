import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const StyledSub = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "60vh",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}
        maxWidth={"xl"}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
      </Container>
    </StyledSub>
  );
}
