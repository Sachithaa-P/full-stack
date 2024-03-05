import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {lazy } from 'react'; 
import LazyLayout from './assets/Components/UI/LazyLayout';



const LazyLogin=lazy(()=>import('./assets/Pages/Login.jsx'));
const LazyRegister=lazy(()=>import('./assets/Pages/Register.jsx'));
const LazyLoginSubmit=lazy(()=>import('./assets/Pages/User/UserHome.jsx'));
const LazyUserHome=lazy(()=>import('./assets/Pages/User/UserHome.jsx'));
const LazyUserServices=lazy(()=>import('./assets/Pages/User/UserServices.jsx'));
const LazyUserFAQ=lazy(()=>import('./assets/Pages/User/UserFAQ.jsx'));
const LazyUserAbout=lazy(()=>import('./assets/Pages/User/UserAbout.jsx'));
const LazyUserContact=lazy(()=>import('./assets/Pages/User/UserContact.jsx'));
const LazyUserProfile=lazy(()=>import('./assets/Pages/User/UserProfile.jsx'));


const LazyRegSubmit=lazy(()=>import('./assets/Pages/Admin/AdminHome.jsx'));
const LazyRegSer=lazy(()=>import('./assets/Pages/Admin/RegisteredService.jsx'));
const LazySerBook=lazy(()=>import('./assets/Pages/Admin/ServiceBooked.jsx'));
const LazySerPen=lazy(()=>import('./assets/Pages/Admin/ServicePending.jsx'));
const LazyTimeSlot=lazy(()=>import('./assets/Pages/Admin/TimeSlot.jsx'));

const LazyAdProfile=lazy(()=>import('./assets/Pages/Admin/AdminProfile.jsx'));
const LazyAdFeedBack=lazy(()=>import('./assets/Pages/Admin/AdminFeedBack.jsx'));


function App() {

  return (
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<LazyLayout component={LazyLogin}/>}/>
    <Route path='/register' element={<LazyLayout component={LazyRegister}/>}/>
    <Route path='/loginsubmit' element={<LazyLayout component={LazyLoginSubmit}/>}/>
    <Route path='/regsubmit' element={<LazyLayout component={LazyRegSubmit}/>}/>
    <Route path='/USER-HOME' element={<LazyLayout component={LazyUserHome}/>}/>
    <Route path='/USER-SERVICES' element={<LazyLayout component={LazyUserServices}/>}/>
    <Route path='/USER-ABOUT' element={<LazyLayout component={LazyUserAbout}/>}/>
    <Route path='/USER-FAQ' element={<LazyLayout component={LazyUserFAQ}/>}/>
    <Route path='/USER-CONTACT' element={<LazyLayout component={LazyUserContact}/>}/>
    <Route path='/USER-PROFILE' element={<LazyLayout component={LazyUserProfile}/>}/>


    <Route path='/RegSer' element={<LazyLayout component={LazyRegSer}/>}/>
    <Route path='/SerBook' element={<LazyLayout component={LazySerBook}/>}/>
    <Route path='/SerPen' element={<LazyLayout component={LazySerPen}/>}/>
    <Route path='/TimeSlot' element={<LazyLayout component={LazyTimeSlot}/>}/>

    <Route path='/Aprof' element={<LazyLayout component={LazyAdProfile}/>}/>
    <Route path='/Feedb' element={<LazyLayout component={LazyAdFeedBack}/>}/>





    </Routes>
    
    </BrowserRouter>
  )
}

export default App
