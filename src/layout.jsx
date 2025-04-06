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
        {/* Start of HubSpot Embed Code */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/242460152.js"></script>
        {/* End of HubSpot Embed Code */}
      </>
    )
  }
}

export default Template
