import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
// import './UserFAQ.css'; // Import CSS file for styles
// import "src/UserFAQ.css";


const UserFAQ = () => {
  return (
    <>
      <div className="u-pro">
        <header>
          <UserNavbar />
        </header>
        <main>
          <div className='pro-container'>
            <div className='pro-home-top'>

              {/* User faq 1 */}
              <div className='ufaq1 paddings innerwidth flexCenter'>
                <div className='ufaq1-container'>
                  <div>
                    <h2 className='primaryText'> Can I schedule an appointment<br /> with my preferred healthcare provider?</h2>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className='ufaq1-para poppins-regular' style={{ padding: '40px' }}>
                      A: Yes, you can choose your preferred healthcare provider and schedule an appointment based on their availability through the app.
                    </span>
                  </div>
                </div>
              </div>

              {/* User faq 2 */}
              <div className='ufaq2 paddings innerwidth flexCenter'>
                <div className='ufaq2-container'>
                  <div className='flexEnd'>
                    <h2 className='primaryText'>Is my personal health information <br />secure within the app?</h2>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className='ufaq2-para poppins-regular' style={{ padding: '40px' }}>
                      A: Yes, we prioritize the security and privacy of your health information. The app uses encryption and follows industry standards to <br />safeguard your data.
                    </span>
                  </div>
                </div>
              </div>

              {/* User faq 3 */}
              <div className='ufaq3 paddings innerwidth flexCenter'>
                <div className='ufaq3-container'>
                  <div>
                    <h2 className='primaryText'>Can I request a prescription<br /> refill through the app?</h2>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className='ufaq3-para poppins-regular' style={{ padding: '40px' }}>
                      A: Absolutely! You can request prescription refills directly within the app, and your healthcare provider will review and process your request.
                    </span>
                  </div>
                </div>
              </div>

              {/* User faq 4 */}
              <div className='ufaq4 paddings innerwidth flexCenter'>
                <div className='ufaq4-container'>
                  <div className='flexEnd'>
                    <h2 className='primaryText'>How do I pay my bills online?</h2>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className='ufaq4-para poppins-regular' style={{ padding: '40px' }}>
                      A: To pay your bills, go to the Billing section, select the invoice you would like to pay, and follow the instructions to complete the <br />payment using your preferred method.
                    </span>
                  </div>
                </div>
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

export default UserFAQ;
