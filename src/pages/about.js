import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const PageTemplate = () => (
  <Layout current="/about">
    <SEO
      title="about"
      keywords={['description', 'about', 'company', 'profile']}
    />
    <div style={{ border: '1px dashed lightgrey' }}>
      <div style={{ margin: '3rem auto', maxWidth: 600 }}>
        <h1>about</h1>
        <h1>title</h1>
        <h2>subtitle</h2>
        <h3>subsubtitle</h3>
        <h4>subsubsubtitle</h4>
        <h5>subsubsubsubtitle</h5>
        <h6>subsubsubsubsubtitle</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default PageTemplate
