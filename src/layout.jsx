import React from 'react'

import './variables.scss'
import './global.scss'
import Navigation from './components/navigation'
import Footer from './components/footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
