import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const buttonSectionView = (buttonText) => {
  const ShopNowButton = styled(Button)({
    color: "#fff",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#242323",
    },
  });
  if (buttonText) {
    return (
      <>
        <ShopNowButton variant="contained">{buttonText}</ShopNowButton>
      </>
    );
  }
};

export default buttonSectionView;
