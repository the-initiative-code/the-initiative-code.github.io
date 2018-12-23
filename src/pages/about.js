import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const User = props => (
  <div className={style.user}>
      <img src={props.face} className={style.face} alt=""/>
      <div className={style.description}>
          <h2 className={style.name}>{props.name}</h2>
          <p className={style.experience}>{props.experience}</p>
      </div>
  </div>
      )

const PageTemplate = () => (
  <Layout current="/about">
    <SEO
      title="about"
      keywords={['description', 'about', 'company', 'profile']}
    />
    <div className={style.frame}>
      <h1>Who We Are</h1>
      <User
name="Joseph Langdon"
face="https://randomuser.me/api/portraits/men/17.jpg"
experience="<description>"
	/>
	<User
name="Brandon Clide"
face="https://randomuser.me/api/portraits/men/32.jpg"
experience="<description>"
	/>

      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default PageTemplate
