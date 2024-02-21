
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import '../assets/css/HomePage.css';



const Home = () => {

    const navigate = useNavigate();

    const handleClick= () => {
     navigate('/login');
    };
  return (
    <>
      <Navbar />
      <div className="display">
        <div className="display-content">
        
          <h1 className="display-heading animate__animated animate__rotateIn">WANT HELP?</h1>
          <p className="display-description">
          <button onClick={handleClick} className="order-now-button">View Services</button>
          <br></br>
          <br></br>
          <br></br>
          <h2>Senior Citizen Helpline Number 14567 </h2>
          </p>
         
        </div>
      </div>
   
    </>
  );
};

export default Home;




