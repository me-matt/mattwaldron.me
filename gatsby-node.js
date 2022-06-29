const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`{
      allMarkdownRemark(
        filter: {
          fields: { draft: { eq: false } },
          fileAbsolutePath: {regex: "^/(blog)/"  }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  const templates = {};

  const getTemplate = slug => {
    if (!templates[slug]) {
      templates[slug] = path.resolve(`./src/templates/${slug}.tsx`);
    }

    return templates[slug];
  }

  posts.forEach((post) => {
    const blogPost = post.node.frontmatter.template || 'blog-post';
    console.log(post.node.fields.slug);

    createPage({
      path: post.node.fields.slug,
      component: getTemplate(blogPost),
      context: {
        slug: post.node.fields.slug,
      },
    })
  })

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    pathPrefix: '/',
    component: path.resolve('./src/templates/index.tsx'),
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
