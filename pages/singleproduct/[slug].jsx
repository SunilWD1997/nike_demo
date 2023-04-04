import MultiCarousel from "@/components/MultiCarousel";
import SingleProductCarosel from "@/components/SingleProductCarosel";
import styles from "@/styles/SingleProduct.module.css";
import { useRouter } from "next/router";





const SingleProduct = () => {
  const router = useRouter();

  const { slug } = router.query;





  return (
    <div>
    <div className={styles.singleproduct}>
      <div className={styles.left}>
        <SingleProductCarosel />
       
      </div>

      {/* product details */}

      <div className={styles.right}>
        <h2>Jordan Retro 6 G</h2>
        <p>Men's Golf Shoes</p>
        <p>MRP: Rs. 19,695.00</p>
        <p>incl of taxes</p>
        <p>(Also includes all aplicable thumbs)</p>

        <div className={styles.product_size}>
          <div className={styles.first_row}>
            <div className={styles.select_size}>Select Size</div>
            <div className={styles.select_guide}>Select Guide</div>
          </div>

          <div className={styles.size_selection}>
            <span>6</span>
            <span>6.5</span>
            <span>7</span>
            <span>8.5</span>
            <span>9.5</span>
            <span>10</span>
            <span>10.5</span>
            <span>11</span>
            <span style={{ backgroundColor: "grey" }}>10</span>
            <span style={{ backgroundColor: "grey" }}>10</span>
            <span style={{ backgroundColor: "grey" }}>10</span>
          </div>
          <div className={styles.error_selection}>Size selection required</div>
        </div>

        <button className={styles.btn_1}>Add to Cart</button>
        <button className={styles.btn_2}>Wishlist </button>

        <div className={styles.product_details}>product Details</div>

        <p className={styles.para_1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime
          molestiae odio, corporis dolores laboriosam eius consequuntur
          veritatis optio fugit ullam aperiam, deleniti, voluptas commodi
          adipisci dicta eos neque similique a possimus eveniet libero.
          Blanditiis vero quis doloremque sit beatae totam assumenda excepturi.
        </p>
        <p className={styles.para_2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime
          molestiae odio, corporis dolores laboriosam eius consequuntur
          veritatis optio fugit ullam aperiam, deleniti, voluptas commodi
          adipisci dicta eos neque similique a possimus eveniet libero.
        </p>

        <h3>You might Also Like</h3>
      </div>

     
    </div>
    <MultiCarousel />
    </div>
  );
};

export default SingleProduct;
