import React from 'react'
import { useSiteMetadata } from './hooks/use-site-metadata'

const Seo = ({ description, title, image, url, children }) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata()

  const seo = {
    title: title ? `Vimvala | ${title}` : defaultTitle,
    description: description || defaultDescription,
    url: url || 'https://www.vimvala.com',
    image,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}

export default Seo
