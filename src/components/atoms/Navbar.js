// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles

// components
import { NavLink } from './Link'
import styles from './Navbar.module.css'

const Navbar = ({ selected }) => {
  return (
    <div className={styles.navbar}>
      <NavLink
        href="/projects"
        text="Our work"
        type="header"
        selected={selected}
      />
      <NavLink
        href="/pricing"
        text="Our prices"
        type="header"
        selected={selected}
      />
      <NavLink
        href="/about"
        text="Who we are"
        type="header"
        selected={selected}
      />
      <NavLink
        href="/contact"
        text="get started"
        type="cta"
        selected={selected}
      />
    </div>
  )
}

export default Navbar
