import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="flex gap-1.5">
      {tags.map((tag) => (
        <div key={tag} className="bg-slate-900 rounded py-2 px-3">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
