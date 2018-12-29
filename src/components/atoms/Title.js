// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles
import { rhythm, scale } from '../../utils/typography'
import styles from './Title.module.css'

// components

const DefaultTitle = () => (
  <div className={styles.default}>
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <h1 className={styles.titleFont}>THE INITIATIVE</h1>
    </Link>
  </div>
)

export default DefaultTitle
