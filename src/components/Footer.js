import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css'

const Footer = () => {
  return (
        <footer className={styles.footer}>
          <div className={styles.navigation}>
            <a href="/" className={styles.navItem}>
              Home
            </a>
            <a href="/about" className={styles.navItem}>
              About
            </a>
            <a href="/articles" className={styles.navItem}>
              Articles
            </a>
            <a href="/blog" className={styles.navItem}>
              Blog
            </a>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube className={styles.icon} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://www.pinterest.com">
              <FaPinterest className={styles.icon} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter className={styles.icon} />
            </a>
          </div>
          <div className={styles.copywright}>
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </div>
        </footer>
      );
    };


export default Footer
