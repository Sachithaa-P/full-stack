import React, { useState, useEffect } from 'react';
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

function MyComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  };

  const partnerLogosContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    padding: '0 20px'
  };

  const partnerLogoStyle = {
    width: '150px',
    height: '80px',
    margin: '15px'
  };

  return (
    <section style={{
      color: '#666',
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
      transform: isVisible ? 'translateX(0)' : 'translateX(100%)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '5rem'
      }}>
        <div style={{ flex: '1', maxWidth: '50%', marginBottom: '2rem' }}>
          <img style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }} alt="hero" src="https://img.freepik.com/free-photo/nurse-sitting-with-old-man-woman-sofa_23-2148238964.jpg?t=st=1708667790~exp=1708671390~hmac=f3fd9d5f37966f3e8323382bcd1d1103b3a91d356f72622de45005550ce68173&w=996" />
        </div>
        <div style={{ flex: '1', maxWidth: '50%', marginLeft: '2rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '500', marginBottom: '1rem' }}>Why Choose?</h1>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '500', marginBottom: '1rem' }}>Home-z</h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.5' }}>Home-z has been a leading mental health and well-being care services provider since 2014. Our approach is person-centric and based on scientific evidence principles. Our technology-enabled service platform offers online mental health counselling and psychiatric online consultations.

We have provided over one lakh hours of mental health services and more than ten thousand hours of caregiver support. Our expert mental health therapists will work with you to assess and evaluate your concerns before starting your care plan journey.

Our experience with various age groups and treatment of their mental illnesses has helped us to offer a wide range of care services, including Psychiatry online consultations, Dementia care and elderly care.

When it comes to mental health and well-being, we know just how important it is to make sure you and your loved ones get the care and support you need. </p>
          <div style={{ textAlign: 'center' }}>
            <button style={{
              marginLeft: '0.5rem',
              backgroundColor: '#4b5563',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              outline: 'none'
            }}>Explore</button>
          </div>
        </div>
      </div>
      <div>
        <h1 style={titleStyle}>Our Partners</h1>
        <div style={partnerLogosContainerStyle}>
          <img src={'https://fareshare.org.uk/wp-content/uploads/2017/03/FS-logo-small-applications-RGB.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHotmhg8gfwuqCCo5_d_qzgrBuwUHBsjKgfuAaIYseP_cBIdWaNBr-nGO6qnHIRXOa_i0&usqp=CAU'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://i.pinimg.com/originals/84/e9/1c/84e91ca33d424450bc97d20522677345.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://www.marketing91.com/wp-content/uploads/2017/11/SWOT-analysis-of-Zomato-3.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://2.bp.blogspot.com/-c_RApHEl2Yo/U6FzqC1GtXI/AAAAAAAAASU/GjN1mJSS5io/s1600/State-Bank-Of-India1.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        </div>
      </div>
    </section>
  );
}

const UserAbout = () => {
  return (
    <>
      <div className="u-about">
        <header>
          <UserNavbar />
        </header>
        <main>
          <MyComponent />
        </main>
        <footer>
          <UserFooter />
        </footer>
      </div>
    </>
  );
}

export default UserAbout;
