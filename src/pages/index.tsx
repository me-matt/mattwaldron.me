import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data: { site: { siteMetadata: { title } } }, location }) => {
  return (
    <Layout location={location}>
      <SEO title={title} />
    </Layout>
  )
}

export default Home;

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
}`
