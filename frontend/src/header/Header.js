import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


export default function Header() {
  return (
    <header>
        <div>
        <span className='logo'><Link to ="/">Main</Link></span>
        <ul className='nav'>
                <li> 
                  <Link to ="/login">Log in</Link>
                </li>
                <li> 
                  <Link to ="/register">Register</Link>
                </li>
            </ul>
        </div>
    </header>

  )
}