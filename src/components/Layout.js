// main imports
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// styles
import styles from './Layout.module.css'
import './LayoutGlobal.css'

// components
import Header from './atoms/Header'
import Footer from './atoms/Footer'

const Layout = ({ children, current }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={styles.mainDiv}>
          <Header siteTitle={data.site.siteMetadata.title} selected={current} />
          <div className={styles.innerDiv}>{children}</div>
          <Footer height={170} selected={current} />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
