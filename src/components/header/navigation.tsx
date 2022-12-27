import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CardMedia from "@mui/material/CardMedia";
import { Black, Medium } from "../FontStyle";
import { buttonSectionView__sm } from "../Button";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win?: () => Window;
}
export default function PersonalNavigation(props: Props) {
  const navItems = ["Catalogue", "Fashion", "Favourite", "Lifestyle"];
  const { win } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item: string) => (
          <ListItem key={item} disablePadding>
            <ListItemButton style={Medium} sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                onClick={() => (window.location.href = "/catalogue")}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = win !== undefined ? () => win().document.body : undefined;
  return (
    <>
      <CssBaseline />
      <AppBar style={{ background: "#fff" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <CardMedia
            component="img"
            sx={{
              width: "2.7vh",
            }}
            image="/img/logo.png"
          />
          <Typography
            variant="h6"
            component="div"
            style={Black}
            sx={{
              color: "#000000",
              flexGrow: 1,
              marginLeft: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            FASHION
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                style={Medium}
                sx={{
                  color: "#242323",
                  letterSpacing: "0.01em",
                }}
                onClick={() => (window.location.href = "/signup")}
              >
                {item}
              </Button>
            ))}
            {buttonSectionView__sm("sign up", {color:"#fafafa"})}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
