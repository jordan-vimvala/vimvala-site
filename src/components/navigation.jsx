import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const links = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Articles', url: '/articles' },
  { name: 'Contact', url: '/contact' },
]

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <div className="sticky top-0 w-full z-30 bg-dark">
      <div className="mx-auto my-0 flex justify-between items-center w-full md:max-w-7xl">
        <div className="logo w-1/2 p-3">
          <Link href="/">
            <StaticQuery
              query={pageQuery}
              render={(data) => (
                <GatsbyImage
                  image={data.allContentfulAsset.nodes[0].gatsbyImageData}
                  alt="logo"
                  loading="eager"
                />
              )}
            />
          </Link>
        </div>

        <div class="inline-flex md:hidden text-gray-200">
          <button class="flex-none px-2" onClick={mobileMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <span class="sr-only">Open Menu</span>
          </button>
          {isMobileMenuOpen && (
            <div class="absolute top-12 right-0 w-full bg-dark">
              <ul class="flex flex-col items-center justify-center w-full">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      activeClassName="font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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

export const pageQuery = graphql`
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
`
