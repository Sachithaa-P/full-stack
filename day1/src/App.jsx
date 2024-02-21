
import LoginComponent from "./Components/Login"

import Signup from "./Components/SignUp"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'; 
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      
        <Route path="/login" element={<LoginComponent/>}/> 
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
