import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="techcity logo" width={50} height={50} />
          <h1 className={styles.logoText}>TechcityHQ</h1>
        </div>
        <p className={styles.desc}>
        Empowering Your Ecommerce Business - Tips and Tricks, Honest Reviews, 
        Expert Advice, and Everything You Need to Succeed Online.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/pinterest.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Ecommerce</Link>
            <Link href="/">SEO</Link>
            <Link href="/">AI</Link>
            <Link href="/">Coding</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Pinterest</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer