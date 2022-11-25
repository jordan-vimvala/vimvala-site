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
        <div className="bg-slate-100 py-32">
          <div className="bg-slate-100 max-w-3xl m-auto text-center">
            <h1 className="text-2xl text-primary font-bold mb-3">Articles</h1>
            <h2 className="text-xl font-bold">
              Our best tips and tricks for making the most of the Salesforce
              platform
            </h2>
          </div>
        </div>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default ArticleIndex

export const Head = () => {
  return (
    <Seo
      title="Articles"
      description="Aggregated knowledge about the Salesforce platofrm and developing on it."
    />
  )
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
