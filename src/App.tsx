import * as React from "react";
import PersonalNavigation from "./components/header/Navigation";
import Banner from "./components/header/Banner";
import BrandsContainer from "./components/main/Brands"
import NewArrivals from "./components/main/NewArrivals";
import VoucherContainer from "./components/main/Voucher"
import YoungsFav from "./components/main/YoungsFav";
import AppsContainer from "./components/main/Apps"
import SubscribeContainer from "./components/main/Subscribe"
import Footer from "./components/footer/Footer"
import Stack from "@mui/material/Stack";


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win?: () => Window;
}


export default function App(props: Props) {

  
  return (
    <>
    <Stack direction={{ xs: 'column' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}>
    <PersonalNavigation/>
    <Banner/>
    <BrandsContainer/>
    <NewArrivals/>
    <VoucherContainer/>
    <YoungsFav/>
    <AppsContainer/>
    <SubscribeContainer/>
    
    </Stack>
    <Footer/>
    </>
    );
}
  
    
      




