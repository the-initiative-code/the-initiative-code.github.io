import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const PageTemplate = () => (
  <Layout current="/contact">
    <SEO title="contact us" keywords={['contact', 'email', 'reach out']} />

    <div className={style.frame}>
      <div>
        <h1>Contact</h1>
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
