import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import DataGenerator from '../components/DataGenerator'

import ErrorPage from '../components/Error'

const IndexPage = () => (
  <Layout current="home">
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <div style={{ border: '1px dashed lightgrey' }}>
      <ErrorPage>
        <Link to="/all-files">
          <p>here, check out some files!</p>
        </Link>
      </ErrorPage>
    </div>
  </Layout>
)

export default IndexPage
