// main imports
import React from 'react'
import { Link } from 'gatsby'

// styles
import style from './contact.module.css'

// components
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
        <Form onSubmit={e => console.log(e)} />
      </div>
    </div>
  </Layout>
)

export default PageTemplate
