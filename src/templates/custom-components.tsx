import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import styled from "styled-components";

import Article from "../components/Article"
import TwoColumnUnstyled from '../components/TwoColumn';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUnstyled from "../components/Contact"

const Experience = ({ link, title, description, children }) => (
  <>
    <h4><a href={link} target="_new">{title}</a>, {description}</h4>
    {children}
  </>
)

const Contact = styled(ContactUnstyled)`
a {
    display: none;
    text-align: center;

    @media print
    {
      display: block;
    }
  }
`;

const TwoColumn = styled(TwoColumnUnstyled)`
  div:first-child {
    margin-right: 1.75rem;
  }

  div:last-child {
    margin-left: 1.75rem;
  }

  h4 {
    margin-top: 0;
  }
`;

const CustomComponents = ({ data: { markdownRemark: post, site: { siteMetadata: { title } } }, pageContext: { previous, next }, location }) => (
  <Layout location={location} title={title}>
    <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
    <Article>
      <h2>{post.frontmatter.title}</h2>
      {renderAst(post.htmlAst)}
    </Article>
  </Layout>
)

export default CustomComponents

const renderAst: Transformer = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: { 
    "contact": Contact,
    "two-column": TwoColumn,
    "experience": Experience
  }
}).Compiler

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
      htmlAst
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
