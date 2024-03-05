/* eslint-disable react/no-unescaped-entities */
import '../Css/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    return (
        <div className='logb'>

            <div className='wrapper'>
                <form action="">
                    <h2 style={{ textAlign: 'center' ,color: '#144db8'}}>Sign Up</h2>
                    <div className="input-box">
                        <input type="text" placeholder="UserName"  />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email"  />
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password"  />
                        <FaLock className='icon' />
                    </div>
                    <button type="submit" onClick={()=> navigate('/regsubmit')}>Sign Up</button>
                    <div className="register-link">
                        <p>Already have an account?  <Link to="/">SignIn</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
