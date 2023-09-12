import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import bee from '../../images/bees.png';

const NavBar = () => {
  return (
    <nav className='navbar-page'>
      <main className='navbar-main'>
        <div className='navbar-logo-container'>
          <Link to='/' className='navbar-logo'>NewsHive</Link>
          <img className='logo'src={bee} />
        </div>
        {/* <div className="nav-link-container">
          <NavLink className="nav-link" to="/" aria-label="link to homepage">Home</NavLink>
          <NavLink className="nav-link" to="/search" aria-label="link to search page">Search</NavLink>
        </div> */}
      </main>
    </nav>
  )
}

export default NavBar