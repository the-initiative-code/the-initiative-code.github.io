// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles
import { rhythm, scale } from '../../utils/typography'
import styles from './Title.module.css'

// components
import logo from '../../assets/logo.svg'

// TODO
// turn logo into svg to avoid and missing font problems

const DefaultTitle = () => (
  <div className={styles.default}>
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      {/* <h1 className={styles.titleFont + ' ' + 'text-shadow-animation'}>
        THE INITIATIVE
      </h1> */}
      <img
        className={styles.titleFont + ' ' + 'text-shadow-animation'}
        src={logo}
        alt="THE INITIATIVE"
      />
    </Link>
  </div>
)

export default DefaultTitle
