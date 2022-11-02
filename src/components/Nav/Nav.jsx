import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.svg'

export default function Nav() {
  return (
    <div className='nav'>
        <div className="logo-container">
            <div className="logo"><img src={logo} alt="t" /></div>
            <div className="text"><h3>CEROM</h3></div>
        </div>

        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
                <li>Contanct</li>
                <li>H</li>
            </ul>
        </nav>
    </div>
  )
}
