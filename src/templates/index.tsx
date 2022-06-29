import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"

const styles = {
  title: {
    marginBottom: '0.5rem'
  },
  link: {
    boxShadow: `none`,
    color: 'rgb(62, 70, 91)'
  },
  date: {
    margin: 0,
  },
  readingTime: {
    margin: 0,
  },
  description: {
    marginBottom: 0
  }
};

const Hero = styled(Img)`
  display: flex;
  min-width: 150px;
  height: 250px;
  margin: 4px;
`;

const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 3rem;

  a {
    padding: 1rem;
  }
`;

const Blog = (props) => {
  const { data: { site: { siteMetadata: { title } }, allMarkdownRemark: { edges } }, location, pageContext } = props;
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      {edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const thumbnail = node.frontmatter.thumbnail;

        return (
          <Card key={node.fields.slug}>
            {thumbnail && <Hero key={node.fields.slug} fluid={thumbnail.childImageSharp.fluid} />}
            <header>
              <h2 style={styles.title}>
                <Link style={styles.link} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <p style={styles.date}>
                <small>{node.frontmatter.date}</small>
              </p>
              <p style={styles.readingTime}>
                <small>{node.fields.readingTime.text}</small>
              </p>
            </header>
            <section>
              <p
                style={styles.description}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <footer>
              <Link style={styles.link} to={node.fields.slug}>
                Continue reading...
              </Link>
            </footer>
          </Card>
        )
      })}
      <Pagination>
        {(previousPagePath) &&
          <Link to={previousPagePath}>&larr; Newer Posts</Link>
        }
        {(nextPagePath) &&
          <Link to={nextPagePath}>Older Posts &rarr;</Link>
        }
      </Pagination>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { draft: { eq: false } },
        fileAbsolutePath: {regex: "^/(blog)/"  }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
