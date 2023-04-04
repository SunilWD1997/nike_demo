import styles from '@/styles/Products.module.css';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className={styles.products}>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default Products