import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = styled.section`
  margin: 2rem;
`;

const components = {
  twoCol: styled(props => (
    <section className={props.className}>
      <h4>{props.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </section>
  ))`
    margin: 0 2rem;
  
    div {
      display: grid;
      grid-template-columns: 65% 35%;
  
      h4 {
        font-size: 1.25rem;
        margin: 0;
        margin-bottom: 1rem;
      }
  
      ul {
        margin: 0 0 0 2rem;
        grid-column-start: 2;
        grid-row: 1 / 5;
      }
  
      p {
        grid-column-start: 1;
      }
    }
  `,
  experience: styled(props => (
    <section className={props.className}>
      <h4><a href={props.link} target="_new">{props.title}</a> - {props.position}</h4>
      <p>{props.from} - {props.to}</p>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </section>
  ))`
    margin: 0 2rem;
  `,
};

const Blog = ({ data: { site: { siteMetadata: { title } }, allMarkdownRemark: { edges } }, location }) => {
  const blocks = edges
    .filter(e => e.node.frontmatter.order != null)
    .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order);

  return (
    <Layout title={title} location={location}>
      <SEO title="All posts" />
      <Resume>

      {blocks.map(block => {
        const Tmpl = components[block.node.frontmatter.template];
        return (
          <Tmpl
            key={block.node.fields.slug}
            html={block.node.html}
            {...block.node.frontmatter} />
        )
      })}
      </Resume>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "^/(pages)/resume/"}}) {
    edges {
      node {
        html
        frontmatter {
          title
          template
          order
          from
          to
          position
        }
        fields {
          slug
        }
        fileAbsolutePath
      }
    }
  }
}`
