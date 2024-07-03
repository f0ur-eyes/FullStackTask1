import React from 'react'
import {Link} from 'react-router-dom'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='Navbar-Container'>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/add-todo">Add ToDo</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar