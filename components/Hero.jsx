import styles from '@/styles/Hero.module.css';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Hero = () => {
  return (
    <div className={styles.hero}>
    <Carousel autoPlay={true}  showThumbs={false} infiniteLoop={true} showStatus={false}>
    <div>
        <img src="/slide-1.png" />
        <div className={styles.btn} ><Link href='/'>Shop Now</Link></div>
    </div>
    <div>
        <img src="/slide-2.png" />
        <div className={styles.btn} ><Link href='/'>Shop Now</Link></div>
    </div>
    <div>
        <img src="/slide-3.png" />
        <div className={styles.btn} > <Link href='/'>Shop Now</Link></div>
    </div>
 
</Carousel>



</div>
  )
}

export default Hero;