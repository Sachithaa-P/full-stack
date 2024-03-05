// UserNavbar.js

import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo1.png';
import '../../Css/UserNavbar.css'
import boyprofile from '../../Images/boy.png'

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="flexCenter innerWidth container-nav">
        <img src={logo} alt="Home-z" style={{ color: '#fff' }} width={200} />
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={isOpen ? 'open' : ''}>
        <Link to="/USER-HOME"><li>Home</li></Link>
        <Link to="/USER-FAQ"><li>FAQ</li></Link>
        <Link to="/USER-CONTACT"><li>Contact</li></Link>
        <Link to="/USER-SERVICES"><li>Services</li></Link>
        <Link to="/USER-ABOUT"><li>About</li></Link>
        <Link to='/USER-PROFILE'><img src={boyprofile} alt='Profile' className='profile'></img></Link>
        </ul>

      </div>
    </div>
  );
};

export default UserNavbar;
