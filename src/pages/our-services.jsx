import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Seo from '../seo'

import Container from '../components/container'

import { FaLaptopCode, FaHeadset, FaSyncAlt } from 'react-icons/fa'
import { GatsbyImage } from 'gatsby-plugin-image'

class RootIndex extends React.Component {
  render() {
    const services = this.props.data.allContentfulService.edges.map((edge) => ({
      title: edge.node.title,
      image: edge.node.image.gatsbyImageData,
      imageAlt: edge.node.image.description,
      description: edge.node.longDescription.longDescription,
    }))

    return (
      <Layout location={this.props.location}>
        <Container>
          <div className="text-center max-w-2xl mx-auto mt-24">
            <h3 className="font-bold text-3xl mb-8">
              Services offered to help your business
            </h3>
            <p>
              Whether you're just starting in Salesforce or you want to squeeze
              a little more functionality out of it. We're here to help you
              utilize it to its fullest potential.
            </p>
          </div>
          <div className="flex flex-col mx-auto py-12 gap-x-12 md:flex-row md:px-32">
            <div className="flex mb-8">
              <div className="mr-8">
                <FaSyncAlt className="text-5xl text-primary" />
              </div>
              <span>
                <strong className="block mb-1">Implementations</strong>
                <p>Translate business requirements into automated processes.</p>
              </span>
            </div>
            <div className="flex mb-8">
              <div className="mr-8">
                <FaHeadset className="text-5xl text-primary" />
              </div>
              <span>
                <strong className="block mb-1">Consulting</strong>
                <p>Find the best approach to solving your problem.</p>
              </span>
            </div>
            <div className="flex mb-8">
              <div className="mr-8">
                <FaLaptopCode className="text-5xl text-primary" />
              </div>
              <span>
                <strong className="block mb-1">Custom Development</strong>
                <p>Visualforce Pages, Apex Code, Apex Triggers.</p>
              </span>
            </div>
          </div>
        </Container>
        {services.map((service, i) => (
          <div key={service.title} className={`w-full ${i % 2 === 0 ? 'bg-lightGrey' : ''}`}>
            <div
              className={`flex max-w-6xl mx-auto flex-col md:gap-16 md:py-24 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="flex-1">
                <GatsbyImage image={service.image} alt={service.imageAlt} />
              </div>
              <div className="p-3 flex-1">
                <h3 className="font-bold text-3xl text-primary mb-8">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-7">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Layout>
    )
  }
}

export default RootIndex

export const Head = () => {
  return (
    <Seo
      title="Our Services"
      description="At Vimvala we offer many Salesforce services to help you operate your business efficiently."
    />
  )
}

export const query = graphql`
  query {
    allContentfulService(sort: { order: ASC }) {
      edges {
        node {
          id
          longDescription {
            longDescription
          }
          image {
            gatsbyImageData(placeholder: BLURRED)
            description
          }
          title
        }
      }
    }
  }
`
