import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const styles = {
  article: {
    boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
    backgroundColor: 'white',
    border: '1px solid #e0e6ed',
    padding: `0 3rem`,
    width: '60%',
  },
  title: {
    marginTop: '2rem',
    marginBottom: '0.5rem',
    textAlign: 'center'
  },
  detail: {
  },
  date: {
    textAlign: 'center'
  },
  readingTime: {
    textAlign: 'center'
  },
  hr: {
    marginBottom: '1rem'
  },
  nav: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0
  }
};

const BlogPostTemplate = ({ data: { markdownRemark: post, site: { siteMetadata: { title } } }, pageContext: { previous, next }, location }) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <article style={styles.article}>
      <header>
        <h2 style={styles.title}>
          {post.frontmatter.title}
        </h2>
        <p style={styles.date}>
          <small>{post.frontmatter.date}</small>
        </p>
        <p style={styles.readingTime}>
          <small>{post.fields.readingTime.text}</small>
        </p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer>
      </footer>
    </article>

    <nav>
      <ul style={styles.nav}>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </Layout>
)

export default BlogPostTemplate
