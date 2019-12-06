import React from 'react'

export const Category = (props) => {
  return (
    <div className="cat_header">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}
