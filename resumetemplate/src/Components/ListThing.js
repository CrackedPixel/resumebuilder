import React from 'react'

export const ListThing = (props) => {
  const outP = props.arr 
  ? props.arr.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  : null
  return (
    <ul className="arr__list">
      {outP}
    </ul>
  )
}
