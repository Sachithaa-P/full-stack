/* eslint-disable react/no-unescaped-entities */
import '../Css/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    return (

        <div className='logb'>
            <div className='wrapper'>
                <form action="">
                    <h2 style={{ textAlign: 'center', color: '#144db8' }}>Login</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Username" />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password"  />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#" >Forgot Password</a>
                    </div>
                    <button type="submit" onClick={()=> navigate('/loginsubmit')}>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register"> Register</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
