import styles from '@/styles/ProductCard.module.css';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
        <Link href={`/singleproduct/1`}>
             <img src="/p1.png" alt="" />
             <h4>Product Name</h4>
            <div className={styles.price_details}>
                <span>$20.00</span><span>$25.00</span><span>20% off</span>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard