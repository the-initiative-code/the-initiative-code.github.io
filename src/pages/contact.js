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
      <h1 className={style.title}>Contact Us</h1>
      <p className={style.description}>
        Tell us your ideal website, and we will get back to you shortly.
      </p>
      <Form onSubmit={e => console.log(e)} />
    </div>
  </Layout>
)

export default PageTemplate
