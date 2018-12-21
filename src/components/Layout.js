import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

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
        <Header siteTitle={data.site.siteMetadata.title} selected={current} />
        <div
          style={{
            margin: '0 auto',
            // maxWidth: 960,
            padding: '0px 162px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer height={170} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
