import UserNavbar from "./UserNavbar"
import UserFooter from "./UserFooter"
import Services from '/src/assets/Components/UI/Services.jsx';
import RequestForm from "./RequestForm";
const UserServices = () => {
  return (
    <>
      <div className="u-serv">
        <header>
          <UserNavbar />
        </header>
        <main>
          <div className='serv-container' style={{ backgroundColor: 'black' }}>
            <div className='ser-home-top flexCenter' style={{ justifyContent: 'space-between' }}>
              {/*Left-side*/}
              <div className="Ser-leftSide" style={{ paddingLeft: '40px' }}>
                <span className="primaryText">Available Services</span><br />
                <span className="secondaryText" >Our focus is to make patients healthier.<br /> We help to improve the lives of patients <br />through innovation.</span>
              </div>
              {/*right-side*/}
              <div className="Ser-rightSide">
                <Services />
              </div>
              <br/>

            </div>

            {/*slide2-side*/}
            <div className="ser-slide2 " style={{padding:'30px'}}>
              <div className="mission flexCenter" style={{paddingLeft:"30px"}}>
                <h2 className="primaryText">Our Mission</h2>
                <p style={{color:'white', alignContent:'center' ,padding:' 0 30px 20px 30px'}}>we are dedicated to providing compassionate, lifelong healthcare service to the individual, family and community. This means that in everything we do, our focus is on you. We consider it a privilege to serve you.</p>
              </div>
              <div className="vision flexCenter"style={{paddingLeft:"30px"}}>
                <h2 className="primaryText">Our Vision</h2>
                <p style={{color:'white' ,alignContent:'center', padding:' 0 30px 20px 30px'}}>Our vision is to be one of the leading primary health care service center providers in and around Coimbatore, based on measures of patient safety, quality, cost, patient satisfaction and staff engagement</p>
              </div>


            </div>

            <div>

            <div>
            <center><h2 className="primaryText" style={{padding:'40px 0 '}}>REQUEST FOR CONSULTATION</h2></center>
            </div>
            <div className="Request-form" style={{padding:'0 0 40px'}}>
            <RequestForm />
            </div>
            
            
            </div>

          </div>
        </main>
        <footer>
          <UserFooter />
        </footer>
      </div>
    </>
  )
}

export default UserServices
