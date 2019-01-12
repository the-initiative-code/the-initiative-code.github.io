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
    render={data => {
      let frameStyle = styles.mainDiv + ' '
      if (current === 'home') frameStyle = frameStyle + styles.homepageFrame

      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} selected={current} />
          <div className={styles.mainBody}>
            <div className={frameStyle}>
              <div className={styles.innerDiv}>{children}</div>
            </div>
          </div>
          <Footer height={170} selected={current} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
