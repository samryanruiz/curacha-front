import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-curacha.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

function NavBar() {
  const navRef = useRef();
  const navigate = useNavigate(); // useNavigate hook for navigation
  const { isLoggedIn, logout } = useAuth(); // Using the authentication context

  useEffect(() => {
    console.log('Login state in NavBar:', isLoggedIn);
  }, [isLoggedIn]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Correct usage of navigate
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
      <div className="menu" ref={navRef}>
        <Link to="/quote" className="menuItem">Request Quote</Link>
        <ScrollLink to="services-container" spy={true} smooth={true} duration={800} onClick={closeNavbar} className="menuItem"> Services </ScrollLink>
        
        {isLoggedIn ? (
          <button onClick={handleLogout} className="menuItem">Logout</button>
        ) : (
          <Link to="/login" className="menuItem">Login</Link>
        )}

        <FontAwesomeIcon icon={faCircleUser} className="icon" onClick={() => navigate('/profile')} />
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <Link to="/profile" className="profile-icon">
          <FontAwesomeIcon icon={faCircleUser} />
        </Link>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default NavBar;
