import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import Form from '../components/Form'

const PageTemplate = () => (
  <Layout current="/contact">
    <SEO title="contact us" keywords={['contact', 'email', 'reach out']} />

    <div className={style.frame}>
      <div>
        <h1>Contact</h1>
        <p className={style.topic}>Tell us your ideal website</p>
        <Form />

        <div className={style.getStarted}>
          <a
            href="https://images.pexels.com/photos/248370/pexels-photo-248370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            target="_blank"
          >
            get started
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default PageTemplate
