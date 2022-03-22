import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../assets/logo4.png";
import Button from "@mui/material/Button";

import { matchPath, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const pages = ["Home",
//  "Upcoming", 
//  "Past", 
 "About", 
 "Contact"];

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  let location = useLocation();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages
        .filter((i) =>
          location.pathname == "/" ? i.toUpperCase() != "HOME" : i
        )
        .filter((i) =>
          location.pathname != "/"
            ? i.toUpperCase() != "UPCOMING" && i.toUpperCase() != "PAST"
            : i
        )
        .map((page) => (
          <MenuItem>
            <Button
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                if (
                  page.toUpperCase() == "CONTACT" ||
                  page.toUpperCase() == "ABOUT"
                ) {
                  navigate("/" + page.toLowerCase());
                } else if (page.toUpperCase() == "HOME") {
                  navigate("/");
                }
              }}
            >
              {page}
            </Button>
          </MenuItem>
        ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{
          background: "#eee",
          color: "black",
          position: "fixed",
        }}
      >
        <Toolbar>
          <Button
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
            onClick={() => navigate("/")}
            // style={{ "font-family": `"Orbitron", sans-serif`, fontSize:'1.2rem' }}
          >
            <img style={{ height: "2rem" }} src={Logo} />
          </Button>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages
              .filter((i) =>
                location.pathname == "/" ? i.toUpperCase() != "HOME" : i
              )
              .filter((i) =>
                location.pathname != "/"
                  ? i.toUpperCase() != "UPCOMING" && i.toUpperCase() != "PAST"
                  : i
              )
              .map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    if (
                      page.toUpperCase() == "CONTACT" ||
                      page.toUpperCase() == "ABOUT"
                    ) {
                      navigate("/" + page.toLowerCase());
                    } else if (page.toUpperCase() == "HOME") {
                      navigate("/");
                    } 
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{
                    color: "black",
                    fontWeight: "550",
                    "font-family": `"Orbitron", sans-serif`,
                  }}
                >
                  {page}
                </Button>
              ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
