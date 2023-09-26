import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >TechcityHQ:</b> Empowering Your Ecommerce Business
        
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/ecommerce.png" alt="hero" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to TechcityHQ, Lets talk business</h1>
          <p className={styles.postDesc}>
          Tips, Honest reviews, Expert advice, and everything you need to grow your business online.
          </p>
          <button className={styles.button}>Read More</button>
        </div>

      </div>

    </div>
  )
}

export default Featured