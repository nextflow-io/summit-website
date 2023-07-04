const siteUrl = `https://summit.nextflow.io/`;
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Nextflow SUMMIT 2023`,
    description: `Join us at the Nextflow SUMMIT 2023 for the latest developments and innovations from the Nextflow world.`,
    author: `@nextflowio`,
    siteUrl: siteUrl,
    image: `/images/share-image-barcelona.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `accommodations`,
        path: `${__dirname}/src/content/accommodations`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    'gatsby-transformer-sharp',
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`./src/layout/Layout.jsx`),
        },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 907,
              quality: 100,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nextflow SUMMIT 2023`,
        short_name: `summit`,
        start_url: `/`,
        background_color: `#27ae60`,
        theme_color: `#27ae60`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-92P10F5GQ1"
        ]
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteUrl,
        stripQueryString: true,
      },
    },
  ],
}
