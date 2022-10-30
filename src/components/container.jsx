import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return <Tag className="max-w-7xl mx-auto my-0 p-6">{children}</Tag>
}

export default Container
