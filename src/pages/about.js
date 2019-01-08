// main imports
import React from 'react'
import { graphql } from 'gatsby'

// styles
import style from './about.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'

const Us = props => (
  <div className={'row ' + style.individual}>
    <div className="col-sm-4">
      <div className={style.face}>{props.face}</div>
    </div>
    <div className="col-sm-8 ">
      <h3 className={style.name}>{props.name}</h3>
      <p className={style.experience}>{props.experience}</p>
    </div>
  </div>
)

const PageTemplate = props => (
  <Layout current="/about">
    <SEO
      title="about"
      keywords={['description', 'about', 'company', 'profile']}
    />
    <div className={style.frame}>
      <div className={style.descriptionDiv}>
        <div className={style.description}>
          <h1 className={style.pageTitle}>We Are Two</h1>

          <p>
            The Initiative is a collective of two, providing web development
            services with a heavy focus on <strong>brand messaging</strong>.
          </p>

          <p>
            The internet is the new shopfront for your company, and therefore
            your <strong>website needs to deliver a message</strong> that your
            customers can resonate with.
          </p>

          <p>
            We strive to work with you in first refining that brand message, and
            then executing it using all the tools and technologies at our
            disposal.
          </p>

          <p>
            Our tech stack is currently in Javascript, using React, Gatsby,
            Nextjs. We constantly reevaluate what is the most efficient way to
            deliver on our products.
          </p>
        </div>

        <div className={style.description}>
          <h1 className={style.pageTitle}>Our Design Process</h1>

          <p>
            We seek to first understand <strong>your brand</strong> and who{' '}
            <strong>your customers</strong> are, as well as the{' '}
            <strong>brand message</strong> that you want to bring to them.
          </p>

          <p>
            We then go through a "mood board" phase of{' '}
            <strong>ideation with you</strong> in order to refine what we
            believe best fits your brand and message.
          </p>

          <p>
            Then we execute on the agreed upon design sketch and turn it into a
            website, <strong>tailored to you and your audiences' needs</strong>.
          </p>
        </div>
      </div>

      <Us
        name="Tang Li Qun"
        face={<Img fluid={props.data.imageOne.childImageSharp.fluid} />}
        experience="Li Qun works on Web, iOS and Android technologies at his day job in a global media agency, while he focuses his energy on web graphic design, animation and UX work for projects under The Initiative. He is based in Tokyo, Japan."
      />
      <Us
        name="Matthew Yong"
        face={<Img fluid={props.data.imageTwo.childImageSharp.fluid} />}
        experience="Matthew takes up projects developing websites with ReactJS and GatsbyJS. He focuses on building fast-loading static websites that can be managed and deployed efficiently. He is based in Kuala Lumpur, Malaysia and works full-time with an international bank.
        "
      />
    </div>
  </Layout>
)

export default PageTemplate

{
  /* The code below queries images using gatsby-images */
}
export const profileImage = graphql`
  fragment profileImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "us/tlq.jpg" }) {
      ...profileImage
    }
    imageTwo: file(relativePath: { eq: "us/matt.jpg" }) {
      ...profileImage
    }
  }
`
