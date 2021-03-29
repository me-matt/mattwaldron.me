import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { scale, rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={{ display: 'flex', marginBottom: rhythm(1) }}>
            <div style={{ display: 'flex', marginBottom: rhythm(1 / 2) }}>
              {node.frontmatter.thumbnail && <Img key={node.fields.slug} style={{ display: 'flex', marginRight: '1rem', minWidth: '150px', height: '150px' }} fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />}
              {!node.frontmatter.thumbnail && <img style={{ display: 'flex', marginRight: '1rem', marginBottom: 0, minWidth: '150px', height: '150px' }} src={'https://source.unsplash.com/random/150x150'} />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <header>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 2),
                  }}
                > 
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <p style={{ marginBottom: 0, lineHeight: rhythm(1 / 3) }}>
                  <small>{node.frontmatter.date}</small>
                </p>
                <p style={{ marginBottom: 0, lineHeight: rhythm(1) }}>
                  <small>{node.fields.readingTime.text}</small>
                </p>
              </header>
              <section>
                <p
                  style={{
                    marginBottom: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </div>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
