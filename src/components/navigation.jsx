import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import MobileMenu from './mobile-menu'

const links = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/our-services' },
  { name: 'Articles', url: '/articles' },
  { name: 'Contact', url: '/contact' },
]

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allContentfulAsset(
        filter: { contentful_id: { eq: "mEDxMfC7Rh4N70yqJClW7" } }
      ) {
        nodes {
          title
          description
          gatsbyImageData(layout: CONSTRAINED, width: 400, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <div className="sticky top-0 w-full z-30 bg-dark">
      <div className="mx-auto my-0 flex justify-between items-center w-full md:max-w-7xl">
        <div className="logo w-1/2 p-3">
          <Link to="/">
            <GatsbyImage
              image={data.allContentfulAsset.nodes[0].gatsbyImageData}
              alt="logo"
              loading="eager"
            />
          </Link>
        </div>

        <div className="inline-flex md:hidden text-gray-200">
          <MobileMenu links={links} />
        </div>

        <nav className="hidden md:block">
          <ul className="mr-3">
            {links.map((link) => (
              <li
                key={link.name}
                className="inline-block text-gray-200 text-xl lg:text-2xl py-12 ml-3 lg:ml-12"
              >
                <Link to={link.url} activeClassName="font-bold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
