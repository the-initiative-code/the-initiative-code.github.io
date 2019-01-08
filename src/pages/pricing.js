import React from 'react'

import style from './pricing.module.css'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const PageTemplate = () => (
  <Layout current="/pricing">
    <SEO title="pricing" keywords={['prices', 'pricing', 'package']} />

    <div className={style.frame}>
      <h1 className={style.pageTitle}>Our prices</h1>
      <br />
      <div>
        <h5>The services we provide :</h5>
        <p>
          Brand Design Consultation
          <br />
          Website Hosting
          <br />
          Static<sup className="text-highlight">#</sup> Website Design + 2
          Iterations<span className="text-highlight">*</span>
        </p>
        <br />
        <h5>For how much :</h5>
        <p>
          100 USD<span className="text-highlight">*</span>
        </p>
        <br />
        <h5>What will you get :</h5>
        <p>
          2 page static website<sup className="text-highlight">#</sup>
          <br />
          Mobile/Tablet friendly Responsive Design
          <br />
          Custom website design
          <br />
        </p>
        <br />
        <p>
          <strong className="text-highlight">*</strong>
          <i>
            <small> Prices may vary with additional features</small>
          </i>
          <br />
          <strong>
            <sup className="text-highlight">#</sup>
          </strong>
          <i>
            <small> Feature-rich websites available upon request</small>
          </i>
        </p>
      </div>
    </div>
  </Layout>
)

export default PageTemplate
