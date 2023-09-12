import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import bee from '../../images/bees.png';
import burger from '../../images/burger.png'

interface NavBarProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuOpen: boolean
}
const NavBar = ({menuOpen, setMenuOpen}: NavBarProps) => {

  const handleClick = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className='navbar-page'>
      <main className='navbar-main'>
        <div className='navbar-logo-container'>
          <div className='nav-burger'> 
            <img src={burger} alt='nav menu' onClick={handleClick}/>
          </div>
          <Link to='/' className='navbar-logo'>NewsHive</Link>
          <img className='logo'src={bee} />
        </div>
        <div className="nav-link-container">
          <NavLink className="nav-link" to="/category/business" aria-label="link to homepage">Business</NavLink>
          <NavLink className="nav-link" to="/category/entertainment" aria-label="link to entertainment page">Entertainment</NavLink>
          <NavLink className="nav-link" to="/category/sports" aria-label="link to sports page">Sports</NavLink>
          <NavLink className="nav-link" to="/category/health" aria-label="link to health page">Health</NavLink>
          <NavLink className="nav-link" to="/category/technology" aria-label="link to technology page">Technology</NavLink>
          <NavLink className="nav-link" to="/category/science" aria-label="link to science page">Science</NavLink>
        </div>
      </main>
    </nav>
  )
}

export default NavBar