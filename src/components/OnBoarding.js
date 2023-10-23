import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import bg from "../assets/bg.png";
import pbuaya from "../assets/pbuaya1.jpg";
import "./OnBoarding.css";

const OnBoarding = () => {
  const images = [pbuaya, bg];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={bg}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          objectFit: "cover",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <Container className="onboarding-container">
        {/* Image Slider */}
        <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible>
          {images.map((image, index) => (
            <Box
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  marginTop: "30px",
                  width: "100%",
                  paddingBottom: "50%",
                  position: "relative",
                }}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Carousel>

        {/* Announcements */}
        <Card
          sx={{
            marginTop: "10px",
            position: "relative",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="Box">
              Announcements
            </Typography>
            <Typography variant="body2">
              Your announcements content goes here.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default OnBoarding;
