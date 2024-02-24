
import Navbar from "../Components/NavBar";
import '../assets/css/About.css'
// import Footer from "../../Components/Footer";
import Footer from "../Components/Footer";



const About = () => {
  return (
    <>
    <Navbar />
    <div className="font">
    <div className='outer-about' style={{display:'flex',justifyContent:'start'}}>
    <div className="about-page">
      <h1><b>About Us</b></h1>
      <br></br>
      <ul>
        <li>Tamil Nadu is witnessing a vibrant development phase, with the state government giving special emphasis for the development of the
           women and children addressing their concern in a multi phased manner through the social welfare and nutritious programme department.
             The Social Welfare and Women Empowerment Department of the Government of Tamil Nadu under the able guidance of the Honble Chief Minister of Tamil Nadu had always ensured the welfare of the poor, the downtrodden, Women, Children, Senior Citizens and transgenders.
              Their health, nutrition, education, protection and development have been improved through various Social Welfare Schemes.
               They have also been provided with innumerable opportunities and facilities to live a dignified life. 
               The department has initiated, a comprehensive strategy aimed towards the protection and welfare of girl children and women through schemes like The Chief Ministers Girl Child Protection Scheme, The Cradle Baby Scheme, Child Adoption,
                Marriage Assistance Scheme Free Supply of Sweing Machines and Government Service Homes and Working Women Hostels to benefit the girl children and women at large.
                 Special focus has been given to issues relating to senior citizens and transgenders by implementing schemes like Old Age Homes, Day Care Center and Integrated Complexes for the Senior Citizens and wide range of services for the inclusion and livelihood promotion of the transgenders. 
                 The Department of Social Welfare is also implementing various Social Legislations for Women like the Prohibition Child Marriage Act-2006 and Dowry Prohibition Act,1961, Protection of Women from Domestic Violence Act,2005,  Maintenance and Welfare of Parents and Senior Citizen’s Act,2007, Sexual Harassment of Women at Work Place Act,2013.
                  The Department is taking several measures to create awareness among women and others in the society on these Acts in order to ensure that women actually benefit from these provisions available for them</li>
      </ul>
      <br></br> 
     
     
      
      
    </div>
    </div>
    </div>
    
   
    
    
    <Footer/> 
    </>
  );
};


export default About;