import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <li><Link className={styles.link} to='/login'>Login</Link> </li><br /><br />
      <li><Link className={styles.link} to='/signup'>Signup</Link></li>
    </div>
  )
}
