import * as React from "react";
import Box from "@mui/material/Box";
import PersonalNavigation from "./components/header/navigation";
import Banner from "./components/header/banner";
import BrandsContainer from "./components/main/brands"
import NewArrivals from "./components/main/new-arrivals";
import VoucherContainer from "./components/main/voucher"
import YoungsFav from "./components/main/youngs_fav";
import AppsContainer from "./components/main/apps"
import SubscribeContainer from "./components/main/subscribe"
import Footer from "./components/footer/footer"


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win?: () => Window;
}


export default function App(props: Props) {

  
  return (
    <Box sx={{ display: 'flex'}} flexDirection="column" alignItems={"center"} justifyContent="center">
    <PersonalNavigation />
    <Banner/>
    <BrandsContainer/>
    <NewArrivals/>
    <VoucherContainer/>
    <YoungsFav/>
    <AppsContainer/>
    <SubscribeContainer/>
    <Footer/>
    </Box>
    );
}
  
    
      




