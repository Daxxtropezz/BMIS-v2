import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import logo from "../assets/logo.png";
import Management from "./Management";
import { Home, Login } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "maroon" }}>
        <CssBaseline />
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Avatar src={logo} alt="Logo" width={50} height={50} />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            BMIS v2
          </Typography>
          <Stack spacing={2} direction={"row"}>
            <Button
              variant="contained"
              startIcon={<Home />}
              disableRipple
              href="/"
            >
              Home
            </Button>
            <Button
              variant="contained"
              endIcon={<Login />}
              disableRipple
              href="/login"
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
