import React from "react"
import { graphql } from "gatsby"

import "./resume.css"

import Contact from "../components/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
  <Layout location={location} title={siteTitle}>
    <SEO title="Contact" />
    <h2>Contact me</h2>
    <Contact email="contact@mattwaldron.me" />
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
