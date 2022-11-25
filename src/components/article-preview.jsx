import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Tags from './tags'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <ul className="m-0 p-1 list-none flex flex-col gap-6 md:max-w-5xl md:mx-auto">
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            <div className="bg-white">
              <Link
                to={`/article/${post.slug}`}
                className="hover:text-primary flex flex-col shadow-md p-4 rounded-md overflow-hidden hover:shadow-lg md:flex-row md:gap-8"
              >
                <div className="flex-1">
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold mb-1 mt-4">{post.title}</h2>
                    <div className="text-xs">
                      <div className="line-clamp-3">
                        {post.description?.raw &&
                          renderRichText(post.description)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <small>{post.publishDate}</small>
                    <Tags tags={post.tags} />
                  </div>
                </div>
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ArticlePreview
