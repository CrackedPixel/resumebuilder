import React from 'react'

export const Project = (props) => {
  return (
    <div className="proj__container">
      <h3 className="mtop"><a className="url" href={props.url}>{props.title}</a></h3>
      <h4 className="italic size2">Created With: {props.created}</h4>
      {props.children}
    </div>
  )
}
