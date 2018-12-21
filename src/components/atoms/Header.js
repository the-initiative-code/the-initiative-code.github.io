import React from 'react'

import Navbar from './Navbar'
import Title from './Title'

import styles from './Header.module.css'

const headerStyle = {
  height: '100%',
  backgroundColor: '#021B2D',
  color: '#1E2D24',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

const Header = ({ selected }) => (
  <div className={styles.header}>
    <Title />
    <Navbar selected={selected} />
  </div>
)

export default Header
