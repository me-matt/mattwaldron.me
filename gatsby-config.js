module.exports = {
  siteMetadata: {
    title: `Matt Waldron`,
    author: {
      name: `Matt Waldron`,
      summary: `I'm a lifelong learner. Currently working for Xero.`,
    },
    description: `A place for ideation, general thoughts, musings and brain dumps`,
    siteUrl: `https://mattwaldron.me/`,
    social: {
      twitter: `itsmemattw`,
      linkedin: `me-matt`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-custom-blocks",
          //   options: {
          //     blocks: {
          //       protagonist: {
          //         classes: "chat protagonist",
          //         title: "![protagonist](/protagonist.png)"
          //       },
          //       antagonist: {
          //         classes: "chat antagonist",
          //         title: "![antagonist](/antagonist.png)"
          //       },
          //       deuteragonist: {
          //         classes: "chat deuteragonist",
          //         title: "![deuteragonist](/deuteragonist.png)"
          //       },
          //     },
          //   },
          // },
          'gatsby-plugin-styled-components',
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Open sans\:300,400,500,600,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // {
          //   resolve: `gatsby-remark-table-of-contents`,
          //   options: {
          //     exclude: "Table of Contents",
          //     tight: false, 
          //     fromHeading: 1,
          //     toHeading: 6,
          //     className: "table-of-contents"
          //   },
          // },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              removeAccents: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-component`,
        ],
      },
    },
    'gatsby-remark-reading-time',
    // `gatsby-plugin-theme-ui`,
    // {
    //   resolve: 'gatsby-plugin-draft',
    //   options: {
    //     publishDraft: process.env.NODE_ENV !== 'production',
    //   }
    // },
    'gatsby-plugin-draft',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-163149460-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Matt Waldron's Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/blog`,
        background_color: `rgb(249, 250, 252)`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
      // resolve: `gatsby-plugin-typography`,
      // options: {
      //   pathToConfigModule: `src/utils/typography`,
      // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    DEV_SSR: false
  }
}
