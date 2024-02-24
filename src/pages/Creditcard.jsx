import { useState } from 'react';
import '../assets/css/Creditcard.css'


const Creditcard= () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, such as sending data to a backend or displaying a confirmation message.
    console.log("Form submitted:", { cardNumber, cardName, expiryDate, cvv });
    // Reset form fields after submission
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    // Set confirmed to true after submission
    setConfirmed(true);
  };

  const handleConfirm = () => {
    // Here you can add code to handle confirmation action
    console.log("Transaction confirmed!");
    // Reset confirmation state after confirmation
    setConfirmed(false);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardName">Cardholder Name:</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirm Payment</button>
      </form>
      {confirmed && (
        <div>
          <p>Confirm transaction?</p>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default Creditcard;
