import React from 'react'

export default function Button( {text,size,style}) {
  return (
    <button className={`button ${size} ${style}`}>
    {text}
  </button>
  )
}
