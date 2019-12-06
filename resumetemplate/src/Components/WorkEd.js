import React from 'react'

export const WorkEd = (props) => {
  return (
    <div className="worked">
      <div className="spaced_between">
        <h3 className="mtop">{props.title}&nbsp;
        {props.urltitle ? `(` : null }
        {props.urltitle ? <a className="url light" href={props.url}>{props.urltitle}</a> : null }
        {props.urltitle ? `)` : null }
        </h3>
        <h4 className="mtop">
          { props.tt ? props.tt : null}
        </h4>
      </div>
      {
        props.st 
        ? <div className="spaced_between">
            <h4 className="italic">{props.st}</h4>
            <h4 className="italic">{props.stt}</h4>
          </div>
        : null
      }
      {props.children}
    </div>
  )
}
