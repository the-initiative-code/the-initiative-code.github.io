import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const PageTemplate = () => (
  <Layout current="/pricing">
    <SEO title="pricing" keywords={['prices', 'pricing', 'package']} />

    <div className={style.frame}>
      <h1>Our prices</h1>
      <div>
        <p>
          <b>The services we provide :</b>
        </p>
        <p>
          Brand Design Consultation
          <br />
          Static Website Design + 2 iterations *extra changes possible upon
          request, and will incur additional cost.
          <br />
          Website Hosting
        </p>
        <p>
          <b>For how much :</b>
        </p>
        <p>1000 USD</p>
        <p>
          <b>What will you get :</b>
        </p>
        <p>
          Responsive Design
          <br />
          2 Pages *additional pages based on discussion. Prices may vary.
          <br />
          Design Customization
          <br />
          Content Upload
        </p>
      </div>
    </div>
  </Layout>
)

export default PageTemplate
