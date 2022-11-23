import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../seo'
import Layout from '../layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class ArticleIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <div className="bg-slate-100">
          <Hero title="Articles" />
          <ArticlePreview posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default ArticleIndex

export const Head = () => {
  return <Seo title="Articles" />
}

export const pageQuery = graphql`
  query ArticleIndexQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "LL")
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
  }
`
