import React from 'react'

export default function Banner({ message, background }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <h2>{message}</h2>
    </div>
  )
}
