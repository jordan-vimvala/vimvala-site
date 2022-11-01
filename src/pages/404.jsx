import React from 'react'

import Layout from '../layout'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>Page not Found</div>
      </Layout>
    )
  }
}

export default RootIndex