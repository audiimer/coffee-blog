import React, { useState }  from "react";
import styles from "./Header.module.css";
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);

  const showNavBar = () => {
    setNavVisibility(!isNavVisible);
  }

  return (
    <header className={styles.header}>
      <img src={require('../images/coffee-logo.png')} className={styles.logo} alt="logo"/>
      <nav className={`${styles.nav} ${isNavVisible ? styles.responsive_nav : ""}`} >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Articles</a>
        <a href="">Blog</a>
        <a className={styles.signup} href="">Sign Up Free</a>
        <button className={styles.navCloseBtn} onClick={showNavBar}><FaTimes /></button>
      </nav>
      <button className={styles.btn} onClick={showNavBar}><FaBars /></button>
    </header>
  );
};

export default Header;
