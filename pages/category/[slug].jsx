import HeadingTitle from '@/components/HeadingTitle';
import Products from '@/components/Products';
import styles from '@/styles/Category.module.css';
import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter();

    const {slug} = router.query;

  return (
    <div className={styles.category}>
         
<HeadingTitle heading={slug}/>

        <Products/>

        </div>
  )
}

export default Category;