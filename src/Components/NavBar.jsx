
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <nav className="navbar" style={{zIndex: 5}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
      
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
       
          About</Link>
        </li>
       

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
   
          Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
          <AccountCircleIcon/>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
          
       
          Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;