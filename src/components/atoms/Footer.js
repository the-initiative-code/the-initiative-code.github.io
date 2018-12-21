// main imports
import React from 'react'

// styles
import styles from './Footer.module.css'
import { rhythm, scale } from '../../utils/typography'

// components
import { NavLink } from './Link'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerBar}>
      Let us build your brand with you.
      <NavLink href="#" text="get started." />
    </div>
  </div>
)

export default Footer
