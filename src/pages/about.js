import React from "react"
import { graphql } from "gatsby"

import "./resume.css"

import Line from "../components/Line"
import TwoColumn from "../components/TwoColumn"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
  <Layout location={location} title={siteTitle}>
    <SEO title="About me" />
    <h2>About me</h2>
    <TwoColumn>
      <div>
        {[
          `I am a keen problem solver, ideator, communicator and effective team member.`,
          `My values include equality, inclusivity, respect, transparency, ownership, learning and guiding. Preferable working backwards from moon shot to reality.`,
          `I've been working professionally with software systems for over 15 years. In that time, I've gone from developer, senior developer, lead developer, principal engineer, and architecture for the past 3 years.`,
          `The past 3 years have been spent designing systems and team structures over start-ups, SMEs and, most recently, at an enterprise scale.`,
          `I am a keen communicator and value transparency within teams and pods and will advocate for it. The scientific method is also something I favour and will introduce it to teams when possible.`,
        ].map(s => <Line>{s}</Line>)}
      </div>
      <div>
        <h4>My values include...</h4>
        <ul>
          <li>Equality</li>
          <li>Inclusivity</li>
          <li>Respect</li>
          <li>Transparency</li>
          <li>Ownership</li>
          <li>Continuous learning</li>
          <li>Continuous mentoring</li>
        </ul>
      </div>
    </TwoColumn>

  </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
