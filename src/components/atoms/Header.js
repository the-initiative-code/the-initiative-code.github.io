// main imports
import React from 'react'

// styles
import styles from './Header.module.css'

// components
import Navbar from './Navbar'
import Title from './Title'

const Header = ({ selected }) => (
  <div className={styles.header + ' header-global'}>
    <Title />
    <Navbar selected={selected} />
  </div>
)

export default Header
