import React from "react";
import ProductCard from "./ProductCard";
import styles from '@/styles/MultiCarousel.module.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
   

    <div className={styles.main}>
       
   <Carousel responsive={responsive} containerClass={styles.crosel} itemClass={styles.pad}>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
</Carousel>
    </div>
    
  );
};

export default MultiCarousel;
