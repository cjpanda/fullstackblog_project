import React from 'react';
import styles from './menuCategories.module.css';
import Link from 'next/link';




const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link 
          href="/blog?cat=ecommerce"
          className={`${styles.categoryItem} ${styles.ecommerce}`}
        >
          Ecommerce
        </Link>
        <Link 
          href="/blog"
          className={`${styles.categoryItem} ${styles.seo}`}
        >
          SEO
        </Link>
        <Link 
          href="/blog"
          className={`${styles.categoryItem} ${styles.ai}`}
        >
          AI
        </Link>
        <Link 
          href="/blog"
          className={`${styles.categoryItem} ${styles.reviews}`}
        >
          Reviews
        </Link>
        <Link 
          href="/blog"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>

        <Link 
          href="/blog"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
      </div>

  )
}

export default MenuCategories