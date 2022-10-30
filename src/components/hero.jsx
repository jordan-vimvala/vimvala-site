import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = ({ image, content, callout, overlayOpacity }) => (
  <div className="w-full relative">
    {image && (
      <GatsbyImage
        className="w-full"
        alt={image.description}
        image={image.gatsbyImageData}
      />
    )}
    {overlayOpacity && (
      <div
        className={`absolute top-0 w-full h-full bg-black opacity-${overlayOpacity}`}
      />
    )}
    <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
      <div class="w-full mx-3 mt-16 md:w-2/3 md:mx-0">
        <h1 className="text-xl md:text-6xl text-white text-center">{content}</h1>
      </div>
      {callout && (
        <div className="md:mt-6 mt-2">
          <button className="bg-orange-600 text-l md:text-2xl text-white py-2 px-3 rounded ring-1 ring-slate">
            {callout}
          </button>
        </div>
      )}
    </div>
  </div>
)

export default Hero
