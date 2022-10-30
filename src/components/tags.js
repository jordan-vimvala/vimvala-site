import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="flex gap-1.5">
      {tags.map((tag) => (
        <div key={tag} className="bg-slate-200 text-xs rounded py-0.5 px-1">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
