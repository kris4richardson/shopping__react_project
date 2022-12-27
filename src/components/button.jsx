import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const buttonSectionView__sm = (buttonText, sx) => {
  const ShopNowButton = styled(Button)({
    width:"",
    color: "#fff",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2.4",
    letterSpacing: "-0.02em",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#242323",
    },
  });
  if (buttonText) {
    return (
      <>
        <ShopNowButton variant="contained" size="medium" sx={sx}>{buttonText}</ShopNowButton>
      </>
    );
  }
};




const buttonSectionView__lg = (buttonText) => {
  const ShopNowButton = styled(Button)({
    size:"large",
    width:"",
    color: "#fff",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2.4",
    letterSpacing: "-0.02em",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#242323",
    },
  });
  if (buttonText) {
    return (
      <>
        <ShopNowButton variant="contained" size="large">{buttonText}</ShopNowButton>
      </>
    );
  }
};

export  {buttonSectionView__sm,buttonSectionView__lg};

