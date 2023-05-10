import React from 'react'

export default function Card( {image , title ,description}) {
  return (
    <div className=' card'>
        <h3>{title}</h3>
        <img src = {image}/>
        <p>{description}</p>
    </div>
  )
}
