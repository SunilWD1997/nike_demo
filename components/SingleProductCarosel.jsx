import React from "react";

// import styles from "@/styles/ProductCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const SingleProductCarosel = () => {
  return (
    <div className="single_page">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
        <img src="/p4.png" alt="" />
        
      </Carousel>
    </div>
  );
};

export default SingleProductCarosel;
