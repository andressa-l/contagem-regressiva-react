import "./Title.css";
import React from 'react'

export const Title = ({title, span}) => {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <span className='span'>{span}</span>
    </div>
  )
}
export default Title