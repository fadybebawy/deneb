import React, { useEffect } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactsIcon from "@mui/icons-material/Contacts";
import BookIcon from "@mui/icons-material/Book";
import PhoneIcon from "@mui/icons-material/Phone";
const NavBar = () => {
  const [value, setValue] = useState(0);
  const lis = ["home", "services", "about", "portfolio", "blog", "contact"];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function selectIcon(text) {
    switch (text) {
      case "home":
        return <HomeIcon sx={{ color: "orange" }} />;
      case "about":
        return <InfoIcon sx={{ color: "orange" }} />;
      case "services":
        return <SupportAgentIcon sx={{ color: "orange" }} />;
      case "portfolio":
        return <ContactsIcon sx={{ color: "orange" }} />;
      case "blog":
        return <BookIcon sx={{ color: "orange" }} />;
      case "contact":
        return <PhoneIcon sx={{ color: "orange" }} />;
      default:
        return null;
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {lis.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{selectIcon(text)}</ListItemIcon>
              <ListItemText primary={text.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const Bar = () => {
    return lis.map((text) => {
      return (
        <BottomNavigationAction
          href={`#${text}`}
          label={text.toUpperCase()}
          sx={{ fontWeight: "bold" }}
        />
      );
    });
  };

  //? shadow on scrroll

  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const change = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", change);
  }, []);

  return (
    <AppBar
      elevation={scrolled ? 2 : 0}
      position="static"
      sx={{
        position: "sticky",
        top: 0,
        bgcolor: "white",
        color: "black",
        // boxShadow: {scrolled? },
        zIndex: 999,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              flexGrow: 1,
              maxWidthidth: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/images/logo_1.webp"
              alt="logo"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </Typography>

          <Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontSize: "40px",
              }}
            >
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                {Bar()}
              </BottomNavigation>

              <Button
                variant="contained"
                color="info"
                sx={{
                  color: "white",
                  bgcolor: "orange",
                  borderRadius: "20px",
                  m: "0 20px",
                  transition: ".3s",
                  boxShadow: "0",
                  "&:hover": {
                    transform: "translatey(-2px)",
                    boxShadow: "0",
                    bgcolor: "#bc6502",
                    maxHeight: "40px",
                  },
                }}
              >
                Hire Us
              </Button>
            </Box>
            <div>
              <React.Fragment>
                <Button
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    display: { xs: "flex", md: "none" },
                  }}
                  onClick={toggleDrawer("right", true)}
                >
                  <MenuIcon sx={{ color: "orange", fontSize: "30px" }} />
                </Button>
                <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </React.Fragment>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
