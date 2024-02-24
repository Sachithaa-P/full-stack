import { useState } from 'react';
import '../assets/css/Booking.css';
import { useNavigate } from 'react-router-dom';
// import Creditcard from './Creditcard';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, service, message, paymentMethod });
    setName('');
    setEmail('');
    setService('');
    setMessage('');
    setPaymentMethod('');
  };

  

  const creditCardf = () => {
    navigate('/Creditcard');
  };
  const Googlepayf = () => {
    navigate('/googlepay');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="service">Select Service:</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select a service</option>
          <option value="Cooking">Cooking</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Transportation">Transportation</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Mobility Assistance">Mobility Assistance</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Payment Method:</label>
        <div>
          {/* <button
            type="button"
            className={paymentMethod === 'PayPal' ? 'selected' : ''}
            onClick={() => handlePaymentMethodSelection('PayPal')}
          >
            PayPal
          </button> */}
                    <button onClick={Googlepayf} className="order-now-button">Google pay</button>

                    <br></br>
                    <br></br>

          <button onClick={creditCardf} className="order-now-button">Credit card</button>

        </div>
      </div>
      <button type="submit" className="order-now-button">Submit</button>
    </form>
  );
};

export default BookingForm;
