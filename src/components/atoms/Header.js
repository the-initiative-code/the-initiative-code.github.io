// main imports
import React from 'react'

// styles
import styles from './Header.module.css'

// components
import Navbar from './Navbar'
import Title from './Title'

const Header = ({ selected }) => (
  <div className={styles.headerDiv + ' header-global'}>
    <div className={styles.Header}>
      <Title />
      <Navbar selected={selected} />
    </div>
  </div>
)

export default Header
