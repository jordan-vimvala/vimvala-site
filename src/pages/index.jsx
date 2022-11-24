import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Seo from '../seo'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [heroImage] = get(this, 'props.data.allContentfulAsset.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={heroImage}
          content={'"To Blaze New Trails for Businesses and Customers."'}
          callout="Book Free Consulting Call"
          overlayOpacity={30}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const Head = () => {
  return <Seo title="Home" />
}

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulAsset(
      filter: { contentful_id: { eq: "29wGjnKfMAUhvILsWZjiKd" } }
    ) {
      nodes {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1920)
        contentful_id
      }
    }
  }
`
