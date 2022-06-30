import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = props => {
  const { data: { site: { siteMetadata: { title } } }, location } = props;
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
