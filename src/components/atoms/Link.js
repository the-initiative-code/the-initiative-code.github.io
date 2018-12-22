// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles
import styles from './Link.module.css'

export const NavLink = ({ href, text, type = 'default', selected }) => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  let linkClasses = styles.link + ' ' + styles[type]
  linkClasses =
    selected === href ? linkClasses + ' ' + styles.selected : linkClasses
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <p className={linkClasses}>{text}</p>
    </Link>
  )
}
