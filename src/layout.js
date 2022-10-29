import React from 'react'

import './variables.scss'
import './global.scss'
import Seo from './seo'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
