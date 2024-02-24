import Navbar from "../Components/NavBar";
import '../assets/css/About.css'
// import Footer from "../../Components/Footer";
import Footer from "../Components/Footer";
import { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, such as sending data to a backend or displaying a confirmation message.
    console.log("Form submitted:", { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
    <Navbar />
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </form>
    <Footer/> 
    </>
  );
};


export default Contact;
