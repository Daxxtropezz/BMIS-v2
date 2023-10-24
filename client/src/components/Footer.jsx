import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(currentDateTime);

  return (
    <Box
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#517f3d" }}
      >
        <Toolbar>
          <Typography variant="body2" style={{ flex: 1 }}>
            {formattedDateTime} | BMIS v2 &copy; 2023
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
