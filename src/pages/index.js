// main imports
import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

// styles
import style from './index.module.css'

// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import Hero from '../components/atoms/Hero'

const Showcase = props => (
  <Fragment>
    <div className={style.showcase}>{props.showcase}</div>
    <p className={style.client}>{props.client}</p>
  </Fragment>
)

const IndexPage = props => (
  <Layout current="home">
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />

    <div className={style.home}>
      <Showcase
        showcase={<Img fluid={props.data.nest.childImageSharp.fluid} />}
        client="The Nest, 2018"
      />
      <Showcase
        showcase={<Img fluid={props.data.hourtrip.childImageSharp.fluid} />}
        client="HourTrip, 2019"
      />
      <Showcase
        showcase={<Img fluid={props.data.intransit.childImageSharp.fluid} />}
        client="InTransit, 2019"
      />
      <Showcase
        showcase={<Img fluid={props.data.searchbarjs.childImageSharp.fluid} />}
        client="Searchbar.js, 2018"
      />
      <Showcase
        showcase={<Img fluid={props.data.prng.childImageSharp.fluid} />}
        client="Pseudo Random Nonsense Generator, 2018"
      />
    </div>
  </Layout>
)

export default IndexPage

/* The code below queries images using gatsby-images */
export const showcaseImage = graphql`
  fragment showcaseImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hourtrip: file(relativePath: { eq: "ourwork/hourtripcut.png" }) {
      ...showcaseImage
    }
    intransit: file(relativePath: { eq: "ourwork/intransitcut.png" }) {
      ...showcaseImage
    }
    searchbarjs: file(relativePath: { eq: "ourwork/searchbarjs.png" }) {
      ...showcaseImage
    }
    prng: file(relativePath: { eq: "ourwork/prng.png" }) {
      ...showcaseImage
    }
    nest: file(relativePath: { eq: "ourwork/nest.png" }) {
      ...showcaseImage
    }
  }
`
