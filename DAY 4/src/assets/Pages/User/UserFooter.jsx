import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import "../../Css/UserFooter.css";
import logo from '../../Images/logo1.png'
const UserFooter = () => {
  return (
    <div className="f-wrapper" style={{backgroundColor:'#032357'}}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={logo} alt="" width={200} />
          <span className="secondaryText">
          We understand that having someone to take care of your parents is not easy for you. <br/>
          Register today to let us take care of your parents on your behalf.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Location </span>
          <span className="secondaryText"> 234 Gandhipuram , Coimbatore , TamilNadu</span>
          <div className="flexCenter f-menu" style={{color:'#fff', cursor:'pointer'}}>
            <span><a href="#"><CallIcon/></a></span>
            <span><a href="#"> <InstagramIcon/></a></span>
            <span><a href="#"><TwitterIcon/></a></span>
            <span><a href="#"><FacebookIcon/></a></span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
