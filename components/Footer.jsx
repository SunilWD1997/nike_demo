import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.section_1}>
          <h5>Find a store</h5>
          <h5>become a partner</h5>
          <h5>sign up for email</h5>
          <h5>send us feedback</h5>
          <h5>student discount</h5>
        </div>
        <div className={styles.section_2}>
          <div className={styles.sub_sections}>
            <h5>get help</h5>
            <Link href="/">Order status</Link>
            <Link href="/">Delivery</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Payment Options</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className={styles.sub_sections}>
            <h5>About Nike</h5>
            <Link href="/">News</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Investors</Link>
            <Link href="/">Sustainabilty</Link>
          </div>
        </div>

        <div className={styles.social_icons}>
          <FaFacebookF className={styles.icons}/>
          <FaTwitter className={styles.icons}/>
          <FaYoutube className={styles.icons}/>
          <FaInstagram className={styles.icons}/>
        </div>
      </div>

      <div className={styles.footer_bot}>
        <div className={styles.left}>@ 2023 Nike Inc All Rights Reserved</div>
        <div className={styles.right}>
          <span>Guides</span>
          <span>Terms of Sale</span>
          <span> Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
