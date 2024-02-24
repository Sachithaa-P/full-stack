
import LoginComponent from "./Components/Login"

import Signup from "./Components/SignUp"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'; 
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import  "./App.css"
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import Creditcard from "./pages/Creditcard";
import AdminHome from "./pages/AdminHome";
// import Viewfeed from "./src/pages/Viewfeed";
import Viewfeed from "./pages/Viewfeed";
import Viewbooking from "./pages/Viewbooking";
import Adminprofile from "./pages/Adminprofile";
import Addservice from "./pages/Addservices";


import Googlepay from "./pages/Googlepay";
function App() {
  

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Booking" element={<Booking/>}/>
      
        <Route path="/login" element={<LoginComponent/>}/> 
        <Route path="/Creditcard" element={<Creditcard/>}/> 
        <Route path="/AdminHome" element={<AdminHome/>}/> 
        <Route path="/Googlepay" element={<Googlepay/>}/> 
        {/* <Route path="/Viewbooking" element={<Viewbooking/>}/>  */}
        <Route path="/Viewfeed" element={<Viewfeed/>}/> 
        <Route path="/Adminprofile" element={<Adminprofile/>}/> 
        <Route path="/Viewbooking" element={<Viewbooking/>}/> 
        <Route path="/Addservice" element={<Addservice/>}/> 




      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
