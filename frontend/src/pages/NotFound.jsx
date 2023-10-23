import React from "react";
import { Container, Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
// import NotFoundImage from "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif";

const NotFound = () => {

  return (
    <Container sx={{ textAlign: "center", pt: 4 }}>
      {/* <img src={NotFoundImage} alt="404" style={{ width: "100%" }} /> */}
      <Typography variant="h1" sx={{ fontSize: "80px", mt: 4 }}>
        404
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "80px" }}>
        Look like you're lost
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        The page you are looking for is not available!
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#39ac31",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
