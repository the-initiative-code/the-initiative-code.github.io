import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import ErrorPage from '../components/Error'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage />
  </Layout>
)

export default NotFoundPage
