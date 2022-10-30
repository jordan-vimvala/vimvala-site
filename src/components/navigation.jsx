import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-30 w-full bg-dark">
      <div className="mx-auto my-0 flex justify-between items-center max-w-7xl">
          <div className="logo">
            <Link href="/">
              <StaticQuery
                query={pageQuery}
                render={(data) => (
                  <GatsbyImage
                    image={data.allContentfulAsset.nodes[0].gatsbyImageData}
                    alt="logo"
                  />
                )}
              />
            </Link>
          </div>
        <div className="">
          <nav>
            <ul>
              <li className="inline-block text-gray-200 text-2xl py-12 ml-12">
                <Link to="/" activeClassName="font-bold">
                  Home
                </Link>
              </li>
              <li className="inline-block text-gray-200 text-2xl py-12 ml-12">
                <Link to="/services" activeClassName="font-bold">
                  Services
                </Link>
              </li>
              <li className="inline-block text-gray-200 text-2xl py-12 ml-12">
                <Link to="/articles" activeClassName="font-bold">
                  Articles
                </Link>
              </li>
              <li className="inline-block text-gray-200 text-2xl py-12 ml-12">
                <Link to="/contact" activeClassName="font-bold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation

export const pageQuery = graphql`
  query NavigationQuery {
    allContentfulAsset(
      filter: { contentful_id: { eq: "mEDxMfC7Rh4N70yqJClW7" } }
    ) {
      nodes {
        title
        description
        gatsbyImageData(layout: FIXED, width: 400, placeholder: BLURRED)
      }
    }
  }
`
