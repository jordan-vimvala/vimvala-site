import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import get from 'lodash/get'

import Layout from '../layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import Seo from '../seo'
import {
  FaChartLine,
  FaPhone,
  FaSms,
  FaRegHandshake,
  FaFunnelDollar,
  FaShoppingCart,
} from 'react-icons/fa'

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
          calloutLink="/contact"
          overlayOpacity={30}
        />
        <section className="max-w-3xl mx-auto text-center my-32">
          <h2 className="text-3xl text-primary font-bold mb-4">
            Salesforce Implementation and Development
          </h2>
          <h3 className="text-lg">
            Optimize Your Sales Flow Through Integrations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex shadow-md p-6">
              <FaChartLine className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Google Ads</span>
            </div>
            <div className="flex shadow-md p-6">
              <FaPhone className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Five9</span>
            </div>
            <div className="flex shadow-md p-6">
              <FaSms className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Twilio</span>
            </div>
            <div className="flex shadow-md p-6">
              <FaRegHandshake className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Connectwise Control</span>
            </div>
            <div className="flex shadow-md p-6">
              <FaFunnelDollar className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Custom Lead Conversion</span>
            </div>
            <div className="flex shadow-md p-6">
              <FaShoppingCart className="mr-6 text-4xl text-primary" />
              <span className="text-xl mt-1">Custom Shopping Cart</span>
            </div>
          </div>
        </section>
        {/* <section className="bg-slate-100 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-primary font-bold mb-4">
              10+ Years of Salesforce Experience
            </h2>
            ============= PUT CASE STUDIES HERE ===============
          </div>
        </section> */}
        <section className="bg-slate-100 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-primary font-bold mb-4">
              Latest Articles
            </h2>
            <h3 className="text-lg">
              Learn more about how Salesforce can help you grow your business
              and engage your customers.
            </h3>
          </div>

          <ul className="m-0 p-1 list-none rounded grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-auto">
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <div className="bg-white flex flex-col">
                    <Link
                      to={`/article/${post.slug}`}
                      className="hover:text-primary flex flex-col shadow-md p-4 rounded-md overflow-hidden hover:shadow-lg"
                    >
                      <div className="w-full">
                        <GatsbyImage
                          alt=""
                          image={post.heroImage.gatsbyImageData}
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between mt-3">
                        <div>
                          <h2 className="font-bold mb-1">{post.title}</h2>
                          <div className="text-xs">
                            <div className="line-clamp-3">
                              {post.description?.raw &&
                                renderRichText(post.description)}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-3">
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
        </section>
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
    allContentfulBlogPost(sort: { publishDate: DESC }, limit: 3) {
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
