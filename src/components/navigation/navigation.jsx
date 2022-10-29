import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import * as styles from './navigation.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <div className={styles.stickyHeader}>
      <div className={styles.container}>
        <div className="align-items-center">
          <div className="col-lg-3 col-md-6 col-8 d-flex align-items-center">
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
          </div>
          <div id="right-header" className="col-lg-9 col-md-6 col-4">
            <nav>
              <ul>
                <li className={styles.menuItem}>
                  <Link to="/" activeClassName={styles.active}>
                    Home
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/services" activeClassName={styles.active}>
                    Services
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/articles" activeClassName={styles.active}>
                    Articles
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/contact" activeClassName={styles.active}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
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
