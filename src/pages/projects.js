// main imports
import React from 'react'
import { graphql } from 'gatsby'

// styles
import style from './projects.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'

const Display = props => (
  <div className="row" style={{ margin: 0 }}>
    <div className="col-sm-6" style={{ padding: '20px 0 0 0', margin: 0 }}>
      <a href={props.link} target="_blank">
        <div className={style.companypage + ' ' + style.imgContainer}>
          {props.companypage}
        </div>
      </a>
      <a className={style.companyname}>{props.companyname}</a>
    </div>
    <div
      className={'col-sm-6 ' + style.descriptionDiv}
      style={{ padding: '70px 20px 0 20px', margin: 0 }}
    >
      <p className={style.companydescription + ' ' + style.imgText}>
        {props.companydescription}
      </p>
    </div>
  </div>
)

const PageTemplate = props => (
  <Layout current="/projects">
    <SEO
      title="portfolio"
      keywords={['gallery', 'portfolio', 'works', 'projects']}
    />

    <div className={style.frame}>
      <h1 className={style.pageTitle}>Our work</h1>

      <Display
        companypage={<Img fluid={props.data.hourtrip.childImageSharp.fluid} />}
        companyname="HourTrip, 2019"
        companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
        link="https://playground-panzerstadt.now.sh/"
      />
      <Display
        companypage={<Img fluid={props.data.intransit.childImageSharp.fluid} />}
        companyname="InTransit, 2019"
        companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        link="https://playground-panzerstadt.now.sh/"
      />
      <Display
        companypage={
          <Img fluid={props.data.searchbarjs.childImageSharp.fluid} />
        }
        companyname="Searchbar.js, 2018"
        companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        link="https://playground-panzerstadt.now.sh/"
      />
      <Display
        companypage={<Img fluid={props.data.prng.childImageSharp.fluid} />}
        companyname="Pseudo Random Nonsense Generator, 2018"
        companydescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        link="https://playground-panzerstadt.now.sh/"
      />
      <Display
        companypage={<Img fluid={props.data.nest.childImageSharp.fluid} />}
        companyname="The Nest, 2018"
        companydescription="Prototype design for a co-working startup, focusing on amenities and types of services offered. The webpage was designed for simplicity and the right amount of information at a glance.
        "
        link="https://mayojich.github.io/the-nest/"
      />
    </div>
  </Layout>
)

export default PageTemplate

{
  /* The code below queries images using gatsby-images */
}
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hourtrip: file(relativePath: { eq: "ourwork/hourtripcut.png" }) {
      ...fluidImage
    }
    intransit: file(relativePath: { eq: "ourwork/intransitcut.png" }) {
      ...fluidImage
    }
    searchbarjs: file(relativePath: { eq: "ourwork/searchbarjs.png" }) {
      ...fluidImage
    }
    prng: file(relativePath: { eq: "ourwork/prng.png" }) {
      ...fluidImage
    }
    nest: file(relativePath: { eq: "ourwork/the-nest.png" }) {
      ...fluidImage
    }
  }
`
