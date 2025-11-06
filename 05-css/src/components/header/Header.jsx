import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <button className={styles.btn}>signUp</button>
    </div>
  )
}

export default Header
