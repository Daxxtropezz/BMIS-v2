import React from "react";
import CarouselSlider from "react-material-ui-carousel";
import slider from "../helper/slider.json";
import Item from "./Item";

function Carousel() {
  return (
    <CarouselSlider>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </CarouselSlider>
  );
}

export default Carousel;
