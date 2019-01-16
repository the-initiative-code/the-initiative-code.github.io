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

// content
import PROJECTS from '../_DATA/content/projects.json'
import DUMMY from '../_DATA/content/dummy.json'

const Display = props => (
  <div key={props.key || 0} className="row" style={{ margin: 0 }}>
    <div className="col-sm-7" style={{ padding: '100px 0', margin: 0 }}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className={style.companypage}>{props.companypage}</div>
      </a>
    </div>
    <div className={'col-sm-5 ' + style.descriptionDiv} style={{ margin: 0 }}>
      <h5 className={style.companyname}>{props.companyname}</h5>
      <p className={style.companydescription + ' ' + style.imgText}>
        {props.companydescription}
      </p>
    </div>
  </div>
)

const DisplayContent = ({
  name = 'Test Company, 2019',
  description = DUMMY.text,
  URL = DUMMY.url,
  imageURL = DUMMY.image,
  props,
  ...rest
}) => (
  <Display
    companypage={
      <Img
        fluid={props.data[imageURL.split('.')[0]].childImageSharp.fluid}
        height={300}
      />
    }
    companyname={name}
    companydescription={description}
    link={URL}
    {...rest}
  />
)

const PageTemplate = props => (
  <Layout current="/projects">
    <SEO
      title="portfolio"
      keywords={['gallery', 'portfolio', 'works', 'projects']}
    />

    <div className={style.frame}>
      <h1 className={style.pageTitle}>Our works</h1>

      {PROJECTS.websites.map((project, i) => {
        console.log(project)

        return (
          <DisplayContent
            key={i}
            props={props}
            name={project.name}
            description={project.description}
            URL={project.dev_url}
            imageURL={project.image}
          />
        )
      })}
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
      fluid(maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hourtrip: file(relativePath: { eq: "ourwork/hourtrip2.png" }) {
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
    nest: file(relativePath: { eq: "ourwork/nest.png" }) {
      ...fluidImage
    }
    bluebottle: file(relativePath: { eq: "ourwork/bluebottle.png" }) {
      ...fluidImage
    }
  }
`
