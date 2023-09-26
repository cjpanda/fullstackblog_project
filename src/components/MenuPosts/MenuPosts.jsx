import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuposts.module.css'




const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>

    <Link href="/" className={styles.item}>
      {withImage && (
      <div className={styles.imageContainer}>
        <Image src="/coding.png" alt="" fill className={styles.image} />
      </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.ecommerce}`}>Ecommerce</span>
        <h3 className={styles.postTitle}>10 Benefits Of Personalization In E-commerce</h3> 
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 16.09.2023</span>
          
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src="/coding.png" alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.reviews}`}>Reviews</span>
        <h3 className={styles.postTitle}>Samusng Z50 Ultra Slim Review </h3> 
        <div className={styles.detail}>
          <span className={styles.username}>James Gunn</span>
          <span className={styles.date}> - 18.09.2023</span>
          
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src="/coding.png" alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.ai}`}>AI</span>
        <h3 className={styles.postTitle}>The Role of Artificial Intelligence in E-commerce.</h3> 
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 17.09.2023</span>
          
        </div>
      </div>
    </Link>
    
    <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src="/coding.png" alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.seo}`}>SEO</span>
        <h3 className={styles.postTitle}>Benefits Of SEO In E-commerce</h3> 
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 16.09.2023</span>
          
        </div>
      </div>
    </Link>

  </div>
  )
}

export default MenuPosts