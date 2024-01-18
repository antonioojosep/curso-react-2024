import React from 'react'

function Card(props) {
    const {title, body, footer} = props
  return (
    <div style={{ border : "black 1px solid" }}><h1>{title}</h1><h2>{body}</h2><h3>{footer}</h3></div>
  )
}

export default Card