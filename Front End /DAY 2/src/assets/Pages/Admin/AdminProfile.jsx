import '../../Css/UserProfile.css';
import Aprofile from '../../Images/Userprofile.png';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import AdminSideBar from './AdminSideBar';

const BorderedAvatar=styled(Avatar)`
   border: 3px solid lightseagreen;
`;
const AdminProfile = () => {
  return (
    <>
      <div className="u-profile">
      <header>
      <AdminSideBar/>
      </header>
        <main>
          <div className='profile-container'>
            <div className='profile-home-top flexRowStart' style={{padding:'30px'}}>
            
            {/*Profile-left */}
            <div className='profile-pic'>
            <BorderedAvatar sx={{width: 150, height: 150}} src={Aprofile} alt=''/>
            </div>
            
            {/*Profile-right */}
            <div className='profile-rgt'>
            <div className='profile-Details'>
            <ul>
            <li>Name : Draco Malfoy  </li>
            <li>Email : sk7yolo@gmail.com</li>
            <li>ContactNo : 9876543210</li>
            <li>Location : Coimbatore</li>
            
            </ul>
            </div>

            
            </div>


            </div>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default AdminProfile
