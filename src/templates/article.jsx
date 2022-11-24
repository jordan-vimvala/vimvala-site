import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'

import Seo from '../seo'
import Layout from '../layout'
import Tags from '../components/tags'
import './article.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)

    return (
      <Layout location={this.props.location}>
        <div className="relative">
          <div className="absolute w-full h-full z-10 bg-gradient-to-r from-black opacity-80"></div>
          <div className="absolute top-0 z-20 w-full h-full px-10 py-4 md:max-w-5xl md:mx-auto md:left-1/2 md:-translate-x-1/2">
            <span className="text-white flex flex-col justify-between h-full">
              <h1 className="text-xl md:text-4xl md:mt-12">{post.title}</h1>
              <span className="text-xs md:text-lg">
                <hr className="mb-3" />
                <div className="flex flex-col md:flex-row md:justify-between">
                  <span>
                    {post.author?.name} &middot;{' '}
                    <time dateTime={post.rawDate}>{post.publishDate}</time>
                  </span>
                  {timeToRead} minute read
                </div>
              </span>
            </span>
          </div>
          <GatsbyImage
            alt={post.heroImage?.description}
            image={post.heroImage?.gatsbyImageData}
            class="h-52 md:h-96"
          />
        </div>
        <div className="p-4 md:max-w-3xl md:mx-auto md:p-12">
          <div className="">
            <div className="text-sm text-slate-600 mb-6">
              {post.description?.raw && renderRichText(post.description)}
            </div>
            <article className="text-slate-700">
              {post.body?.raw && renderRichText(post.body)}
            </article>
            {post.tags && <Tags tags={post.tags} />}
            {(previous || next) && (
              <nav>
                <ul className="flex gap-6 mt-6">
                  {previous && (
                    <li className='md:hover:text-primary'>
                      <Link to={`/article/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li className='md:hover:text-primary'>
                      <Link to={`/article/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const Head = ({ data }) => {
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(data.contentfulBlogPost.description.raw)
  )
  return (
    <Seo
      title={data.contentfulBlogPost.title}
      description={plainTextDescription}
      image={`http:${data.contentfulBlogPost.heroImage.resize.src}`}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          height: 500
          cropFocus: FACES
          resizingBehavior: FILL
        )
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
      tags
      description {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
