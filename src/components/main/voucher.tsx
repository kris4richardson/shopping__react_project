import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import buttonSectionView from "../Button";

const StyledBox = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
}));

const StyledVoucher = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "bottom",
  padding: 8,
  height: "70%",
}));

const VoucherContainer = () => {
  return (
    <StyledBox>
      <StyledVoucher>
        <Container
          sx={{
            marginTop: 8,
            height: 1,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(/img/banner.png)",
          }}
          maxWidth={"xl"}
        >
          {buttonSectionView("sign up")}
        </Container>
        </StyledVoucher>
    </StyledBox>
  );
};

export default VoucherContainer;
