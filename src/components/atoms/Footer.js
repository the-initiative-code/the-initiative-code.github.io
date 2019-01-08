// main imports
import React from 'react'

// styles
import styles from './Footer.module.css'
import { rhythm, scale } from '../../utils/typography'

// components
import { NavLink } from './Link'

const Footer = ({ selected }) => {
  if (selected !== '/contact') {
    return (
      <div className={styles.footer + ' footer-global'}>
        <div className={styles.footerBar}>
          Let us build your brand with you.
          <NavLink href="/contact" text="get started." />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Footer
