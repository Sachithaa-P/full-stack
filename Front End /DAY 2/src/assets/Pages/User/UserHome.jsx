import '/src/assets/Css/UserHome.css'
import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'
import holding from '../../Images/holding.jpg';
import smilywomen from '../../Images/smiley-man-woman-medium-shot.jpg';

const UserHome = () => {
    return (
        <>
            <div>
                <header>
                    <UserNavbar />
                </header>
            </div>
            <main>


                <section className='uhome-wrapper'>
                    <div className='paddings innerwidth flexCenter uhome-container'>

                        {/*left--side */}
                        <div className=' flexColStart uhome-left'>
                            <div className='uhome-title'>
                                <div className='orange-circle' />
                                <h1>
                                    Care <br />For Senior<br /> Parents
                                </h1>
                            </div>

                            <div className='flexColStart uhome-des'>
                                <span className='secondaryText'>
                                    Don not worry , we are here for !
                                </span>
                                <span className='secondaryText'>
                                    Take care of your parents needs.
                                </span>
                            </div>

                            <div className='flexCenter stats' style={{ paddingBottom: '40px' }}>
                                <div className='flexColCenter stat' style={{ paddingLeft: '20px' }}>
                                    <span>9000+</span>
                                    <span className='secondaryText'>HappyCustomers</span>
                                </div>
                                <div className='flexColStart stat' style={{ paddingLeft: '20px' }}>
                                    <span>2500+</span>
                                    <span className='secondaryText'>PrimeUsers</span>
                                </div>
                                <div className='flexColStart stat' style={{ paddingLeft: '20px' }}>
                                    <span>5000+</span>
                                    <span className='secondaryText'>Ratings</span>
                                </div>
                            </div>


                        </div>

                        {/*right--side */}
                        <div className='flexCenter uhome-right'>
                            <div className='image-container'>
                                <img src={holding} alt='' />
                            </div>
                        </div>

                    </div>

                    {/* User Home 2 */}
                    <div className='uhome2 paddings innerwidth flexCenter'>
                        <div className=' uhome2-container'>
                        <div>
                        <h2 className='primaryText'>Why Senior<br /> Home Care Services?</h2>
                        </div>
                        <br/>
                        <br/>
                        <div>
                        <span className=' uhome2-para poppins-regular' style={{ padding:'40px' }}>
                        Every child wants to be there for their parents at their old age amidst their hectic schedule.
                        It becomes very difficult to handle this as some of them stay far away from their parents. The reason why senior home care services
                        are recommended is that the care given is personalized and the caretakers, nurses, caregivers are certified and trained in the service to caregiving. With technology entering every space of life, the process of elderly home care services
                        has become even more convenient with real-time updates and easy communications.
                        </span>
                        </div>

                        </div>

                    </div>
                    {/* User Home 3 */}
                    <div className='uhome3 paddings innerwidth flexCenter'>
                        <div className=' uhome3-container'>
                        <div className='flexEnd'>
                        <h2 className='primaryText'>Commitment Through <br />Strength And <br />Support Home Care Services?</h2>
                        </div>
                        <br/>
                        <br/>
                        <div>
                        <span className=' uhome3-para poppins-regular' style={{ padding:'40px' }}>
                        We assign a reliable ‘Care Manager’ that is available on call, 24*7 to look after your parents’ needs. We offer an easy enrolment process of profiling, assembling reports, planning visits, and setting reminders, in the app with Anvayaa staff guiding through the entire process of NRI parents care services.

If you require any information regarding medical reports, emergency information, and daily activities, you can conveniently track them in the web portal and mobile app. Sign up with us to experience a stress-free life Eldercare services now operational in more than 40+ cities
                        </span>
                        </div>

                        </div>

                    </div>
                    {/* User Home 4 */}
                    <div className='uhome4 paddings innerwidth flexCenter'>
                        <div className=' uhome4-container'>
                        <div>
                        <h2 className='primaryText'>Why Senior<br /> Home Care Services?</h2>
                        </div>
                        <br/>
                        <br/>
                        <div>
                        <span className=' uhome4-para poppins-regular' style={{ padding:'40px' }}>
                        Every child wants to be there for their parents at their old age amidst their hectic schedule.
                        It becomes very difficult to handle this as some of them stay far away from their parents. The reason why senior home care services
                        are recommended is that the care given is personalized and the caretakers, nurses, caregivers are certified and trained in the service to caregiving. With technology entering every space of life, the process of elderly home care services
                        has become even more convenient with real-time updates and easy communications.
                        </span>
                        </div>

                        </div>

                    </div>
                    <div className='uhome5 '>
                    <img src={smilywomen} alt=''/>  
                    <p className='poppins-bold ' style={{fontSize:'40px'}}>Register for our Service</p> 
                    <button className='button'>Register</button>          
                    </div>
                    
                    </section>
            </main>
            <footer>
                <UserFooter />
            </footer>
        </>
    )
}

export default UserHome
