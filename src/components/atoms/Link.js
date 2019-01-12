// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles
import styles from './Link.module.css'

export const NavLink = ({
  href,
  text,
  type = 'default',
  selected,
  ...rest
}) => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  let linkClasses =
    styles.link + ' ' + styles[type] + ' ' + 'text-shadow-animation'
  linkClasses =
    selected === href ? linkClasses + ' ' + styles.selected : linkClasses
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <span className={linkClasses} {...rest}>
        {text}
      </span>
    </Link>
  )
}

export const NavA = ({ href, text, type = 'default', selected, ...rest }) => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  let linkClasses =
    styles.link + ' ' + styles[type] + ' ' + 'text-shadow-animation'
  linkClasses =
    selected === href ? linkClasses + ' ' + styles.selected : linkClasses
  return (
    <a
      href={href}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noopener noreferer"
    >
      <span className={linkClasses} {...rest}>
        {text}
      </span>
    </a>
  )
}
