
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import '../assets/css/HomePage.css';
// import Footer from './Footer';
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';



const Home = () => {

    const navigate = useNavigate();

    const handleClick= () => {
     navigate('/login');
    };

    const navi = useNavigate();

    const handle= () => {
     navigate('/Services');
    };
   
    
  return (
    <>
      <Navbar />
      <div className="display">
        <div className="display-content">
        
          <h1 className="display-heading animate__animated animate__rotateIn">WANT HELP</h1>
          <p className="display-description">
          <button onClick={handleClick} className="order-now-button">View Services</button>
          <br></br>
          <br></br>
          <button onClick={handle} className="order-now-button">Click here </button>
          <br></br>
          <br></br>
          <br></br>
          <h2>Senior Citizen Helpline Number 14567 </h2>
          </p>
         
        </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col-reverse px-5 py-24 md:flex-row items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/nurse-sitting-with-old-man-woman-sofa_23-2148238964.jpg?t=st=1708667790~exp=1708671390~hmac=f3fd9d5f37966f3e8323382bcd1d1103b3a91d356f72622de45005550ce68173&w=996" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Explore our Services!!
      </h1>
      <p className="mb-8 leading-relaxed">
Senior services encompass a range of support programs tailored to meet the needs of older adults. These include healthcare, home care, transportation, nutrition, social activities, legal/financial assistance, caregiver support, housing options, elder abuse prevention, and information/referral services. The aim is to promote independence, enhance quality of life, and ensure the well-being of seniors as they age. Services are provided by various organizations, including government agencies, nonprofits, and healthcare providers.</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-orange-950 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">Explore</button> */}
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore</button>
        {/* <a href="https://en.wikipedia.org/wiki/Elderly_care" ></a> */}
        <Link to="https://en.wikipedia.org/wiki/Elderly_car"></Link>
      </div>
    </div>
  </div>
</section>

     
  
      

      
      <Footer/> 
    </>
  );
};

export default Home;




