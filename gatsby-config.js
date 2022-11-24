require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Vimvala',
    siteUrl: 'https://vimvala.com',
    titleTemplate: '%s | Vimvala',
    description:
      "Experienced Salesforce Specialists who put your company's needs first.",
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vimvala',
        short_name: 'Vimvala',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/vimvala-favicon.png',
      },
    },
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
          allContentfulBlogPost {
            nodes {
              updatedAt
              slug
            }
          }
        }
      `,
        resolveSiteUrl: () => 'https://vimvala.com',
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulBlogPost: { nodes: allArticles },
        }) => {
          const wpNodeMap = allArticles.reduce((acc, node) => {
            const { slug } = node
            acc[`/article/${slug}/`] = node

            return acc
          }, {})
          console.log(wpNodeMap)
          
          return allPages.map((page) => {
            console.log(page.path)
            console.log(wpNodeMap[page.path])
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, updatedAt }) => {
          return {
            url: path,
            lastmod: updatedAt,
          }
        },
      },
    },
  ],
}
