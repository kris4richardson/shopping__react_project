import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Paper } from "@mui/material";
import { buttonSectionView__lg } from "../Button";

const StyledBox = styled("div")(() => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "auto",
  backgroundImage: "url(/img/banner.png)",

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const StyledVoucher = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "bottom",
  padding: 8,
  maxWidth: "100%",
  height: "80vh",

}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "salmon",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VoucherContainer = () => {
  return (
    <StyledBox>
      <StyledVoucher>
        {/* <Grid container sm={12} md={12} lg={1}>
          <Grid item sm={12} md={12} lg={12}>
            <Item>
              <Container
                sx={{
                  width: "100%",
                  height: "80vh",
                 
                  paddingLeft: "0",
                  paddingRight: "0",
                }} maxWidth="xl"
              ></Container>
            </Item>
          </Grid>
        </Grid>
        {buttonSectionView__lg("sign up")} */}
      </StyledVoucher>
    </StyledBox>
  );
};

export default VoucherContainer;
