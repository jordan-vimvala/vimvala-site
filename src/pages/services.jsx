import React from 'react'

import Layout from '../layout'
import Seo from '../seo'

import Container from '../components/container'

import { FaLaptopCode, FaHeadset, FaSyncAlt } from 'react-icons/fa'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Container>
          <div className="text-center max-w-2xl mx-auto mt-32">
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
          {/* Add 1Up component */}
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const Head = () => {
  return <Seo title="Services" />
}
