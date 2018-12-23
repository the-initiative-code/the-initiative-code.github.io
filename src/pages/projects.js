import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const Display = props => (
  <div>
    <div class="row">
      <div class="col-sm-6">
        <img src={props.companypage} className={style.companypage} />
        <p className={style.companyname}>{props.companyname}</p>
      </div>
      <div class="col-sm-6">
        <p className={style.companydescription}>{props.companydescription}</p>
      </div>
    </div>
  </div>
);

const PageTemplate = () => (
  <Layout current="/projects">
    <SEO
      title="portfolio"
      keywords={['gallery', 'portfolio', 'works', 'projects']}
    />

    <div className={style.frame}>
      <h1>Our work</h1>
      <Display
          companypage="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          companyname="The Borring Company, 2018"
          companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        />
        <Display
          companypage="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          companyname="Goggle, 2018"
          companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />
        <Display
          companypage="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          companyname="Warning Brothers, 2018"
          companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        />
        <Display
          companypage="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          companyname="The Borring Company, 2018"
          companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default PageTemplate
