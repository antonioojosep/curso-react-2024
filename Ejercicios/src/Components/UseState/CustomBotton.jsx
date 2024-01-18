import React from 'react'

const CustomBotton = (props) => {

    const {color, text, onclick} = props;

  return (
    <div style={{backgroundColor : color}}  onClick={onclick}><p>{text}</p></div>
  )
}

export default CustomBotton