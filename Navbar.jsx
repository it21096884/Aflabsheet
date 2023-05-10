import React from 'react'
// import './Navbar.css '

export default function Navbar() {
  return (
    <div>
         <nav style={{ backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', width: '50%' }}>
      <li><a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px' }}>Home</a></li>
      <li><a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px' }}>About</a></li>
      <li><a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px' }}>Contact</a></li>
    </ul>
  </nav>

    </div>
  )
}
